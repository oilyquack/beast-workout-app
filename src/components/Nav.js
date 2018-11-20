import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({}) => (
  <header>
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
          User
        </NavLink>
      </li>
      <li>
        <NavLink strict to={"/login"}>
          Login
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Nav;
