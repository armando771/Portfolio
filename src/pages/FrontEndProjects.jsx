import React from "react";
import ProjectCard from '../components/ProjectCard';
import Informations from "../data";
import ContactFront from "./ContactFront";
import { Link } from 'react-router-dom';
import '../styles/projects.css';
import SetaVoltar from '../images/SetaVoltar.jpg';

function FrontEndProjects() {
  return (
    <div>
      <Link to="/projects"><img  id="icon-back" src={ SetaVoltar } alt="icone_Seta_Tras"/></Link> 
    <div className="projects-container">
     {
      Informations.map((info) => <ProjectCard refs={ info.URLS } title={ info.ProjectName } key={ info.ProjectName }/> )
     }
    </div>
    <ContactFront />
    </div>
  )
}

export default FrontEndProjects;
