import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "./logo.png";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
        Kemps Maritime Professional Services <img className="logo" src={logo} alt="logo" /></NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                className="nav-link"
                activeclassname="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                className="nav-link"
                activeclassname="active"
                to="/services"
              >
                Services
              </NavLink>  
            </li>
              <li className="nav-item">
            <NavLink
                className="nav-link"
                activeclassname="active"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
