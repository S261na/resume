import React from "react";
import "./navbar.css";
import logo from "./../../img/Kendall-logo.jpg";

function Navbar() {
  return (
    <section className="top-nav">
      <img src={logo} alt="" id="logo" />
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>RESUME</li>
        <li>PORTFOLIO</li>
        <li>BLOG</li>
        <li>CONTACTS</li>
      </ul>
    </section>
  );
}

export default Navbar;
