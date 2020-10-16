import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="container">
      <div className="navbar navbarStyle">
        <NavLink exact to="/" className="smallNavElement">
          Feed
        </NavLink>
        <NavLink exact to="/" className="biggerNavElement">
          What to eat?!
        </NavLink>
        <NavLink exact to="/recipes" className="smallNavElement">
          Recipes
        </NavLink>
      </div>
    </div>
  );
}
