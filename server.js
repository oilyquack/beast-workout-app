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

const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(bodyParser.json());

app.use("/static", express.static("static"));
app.set("view engine", "hbs");

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
    RETURNING id`,
        [firstName, lastName, dob, email, hash]
      );
    })
    .then(result => {
      res.json({ id: result.id });
    })
    .catch(error => res.json({ error: error.message }));
});

app.get("/*", (req, res) => res.render("index", {}));

app.listen(8080, function() {
  console.log("Listening on port 8080!");
});
