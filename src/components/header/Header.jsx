import React from "react";
import { Link } from "react-router-dom";
import SetaVoltar from '../../images/SetaVoltar.jpg';
import { Nav } from './style';

function Header(props) {
   const { buttonBack } = props;
   return (
      <Nav>
        {
          buttonBack === 'true' ? <Link to="/projects"><img src={ SetaVoltar } alt="icone_Seta_Tras"/></Link> : null
        }
        <span>
        </span>
        <div>
        <Link to="/portfolio">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        </div>
      </Nav>
    );
}

export default Header;
