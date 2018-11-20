import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ loggedIn, userId }) => (
  <header>
    {!loggedIn ? (
      <ul>
        <li>
          <NavLink strict to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink strict to={"/login"}>
            Register/Login
          </NavLink>
        </li>
      </ul>
    ) : (
      <ul>
        <li>
          <NavLink strict to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink strict to={"/sessions"}>
            Sessions
          </NavLink>
        </li>
        <li>
          <NavLink strict to={"/workouts"}>
            Workouts
          </NavLink>
        </li>
        <li>
          <NavLink strict to={"/user"}>
            {userId}
          </NavLink>
        </li>
      </ul>
    )}
  </header>
);

export default Nav;
