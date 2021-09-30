import React from "react";
import { Link } from "react-router-dom";
import SetaVoltar from '../images/SetaVoltar.jpg';
import "../styles/navigationBar.css";

function Header(props) {
   const { buttonBack } = props;
   return (
      <nav className="navigationBar">
        {
          buttonBack === 'true' ? <Link to="/projects"><img  id="icon-back-header" src={ SetaVoltar } alt="icone_Seta_Tras"/></Link> : null
        }
        <img src="https://media-exp3.licdn.com/dms/image/C4D0BAQFalja6B0Vl8A/company-logo_200_200/0/1625490679503?e=2159024400&v=beta&t=nqTaSKJaQJJZIhzEbWFriLCfSlgMlIxslVeGFdU54_o" alt="logotrybe" id="logo-trybe"/>
        <Link className="linkpath" to="/portfolio">Home</Link>
        <Link className="linkpath" to="/about">About</Link>
        <Link className="linkpath" to="/projects">Projects</Link>
      </nav>
    );
}

export default Header;
