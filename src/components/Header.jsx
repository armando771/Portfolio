import React from "react";
import { Link } from "react-router-dom";

import "../styles/navigationBar.css";

function Header() {
   return (
      <nav className="navigationBar">
        <img src="https://media-exp3.licdn.com/dms/image/C4D0BAQFalja6B0Vl8A/company-logo_200_200/0/1625490679503?e=2159024400&v=beta&t=nqTaSKJaQJJZIhzEbWFriLCfSlgMlIxslVeGFdU54_o" alt="logotrybe" id="logo-trybe"/>
        <Link className="linkpath" to="/portfolio">Home</Link>
        <Link className="linkpath" to="/about">About</Link>
        <Link className="linkpath" to="/projects">Projects</Link>
      </nav>
    );
}

export default Header;
