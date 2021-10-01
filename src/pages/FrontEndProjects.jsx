import React from "react";
import ProjectCard from '../components/ProjectCard';
import Informations from "../data";
import ContactFront from "./ContactFront";
import Header from '../components/Header';
import '../styles/projects.css';

function FrontEndProjects() {
  return (
    <div>
      <Header buttonBack="true"/>
    <div className="projects-container" >
     {
      Informations.map((info) => <ProjectCard refs={ info.URLS } title={ info.ProjectName } key={ info.ProjectName } about={ info.AboutProject } /> )
     }
    </div>
    <ContactFront />
    </div>
  )
}

export default FrontEndProjects;
