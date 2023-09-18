import React from "react";
import "./navbar.css";
import logo from "./../../img/Kendall-logo.jpg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <section className="top-nav">
      <img src={logo} alt="" id="logo" />
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
        <li><NavLink to="/gallery">GALLERY</NavLink></li>
      </ul>
    </section>
  );
}

export default Navbar;
