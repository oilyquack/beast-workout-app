import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({}) => (
  <header>
    <ul>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/sessions"}>Sessions</NavLink>
      </li>
      <li>
        <NavLink to={"/workouts"}>Workouts</NavLink>
      </li>
      <li>
        <NavLink to={"/user"}>User</NavLink>
      </li>
    </ul>
  </header>
);

export default Nav;
