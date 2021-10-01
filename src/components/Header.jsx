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
        <div className="empty-header-container">
        </div>
        <div className="links-container-header">
        <Link className="linkpath" to="/portfolio">Home</Link>
        <Link className="linkpath" to="/about">About</Link>
        <Link className="linkpath" to="/projects">Projects</Link>
        </div>
      </nav>
    );
}

export default Header;
