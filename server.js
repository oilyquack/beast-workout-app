require("dotenv").config();

const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const express = require("express");
const app = express();
const db = pgp({
  host: "localhost",
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

const passport = require("passport");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

const bcrypt = require("bcrypt");
const saltRounds = 10;

function getUserByUsername(username) {
  return db
    .one("SELECT * FROM beastuser WHERE email=$1", [username])
    .then(function(user) {
      return user;
    })
    .catch(function(error) {
      return null;
    });
}

function getUserById(id) {
  return db
    .one("SELECT * FROM beastuser WHERE id=$1", [id])
    .then(function(user) {
      return user;
    })
    .catch(function(error) {
      return null;
    });
}

app.set("view engine", "hbs");
app.use("/static", express.static("static"));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  require("express-session")({
    secret: "some random text",
    resave: false,
    saveUninitialized: false
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  getUserById(id).then(function(user) {
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(function(username, password, done) {
    getUserByUsername(username)
      .then(user => {
        if (!user) return done(null, false);

        bcrypt
          .compare(password, user.hashedpassword)
          .then(matches => (matches ? done(null, user) : done(null, false)))
          .catch(error => done(error, false));
      })
      .catch(error => done(error, false));
  })
);

app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next) {
  if (req.user && req.user.id) {
    next();
  } else {
    res.redirect("/login");
  }
}

app.get("/api/sessions", (req, res) => {
  db.any(`SELECT * FROM training`)
    .then(data => {
      res.json(data);
    })
    .catch(error => res.json({ error: error.message }));
});

app.post("/api/register", (req, res) => {
  const { firstName, lastName, dob, email } = req.body;

  bcrypt
    .hash(req.body.password, saltRounds)
    .then(hash => {
      return db.one(
        `
    INSERT INTO beastuser (fname, lname, dob, email, hashedpassword)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, fname`,
        [firstName, lastName, dob, email, hash]
      );
    })
    .then(result => {
      res.status(201).json({ id: result.id });
    })
    .catch(error => res.status(500).json({ error: error.message }));
});

app.post(
  "/api/login",
  passport.authenticate("local", { session: true }),
  (req, res) => {
    res
      .status(200)
      .json(req.user)
      .end();
  }
);

app.get("/*", (req, res) => res.render("index", {}));

app.listen(8080, function() {
  console.log("Listening on port 8080!");
});
