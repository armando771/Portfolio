import React from "react";
import ProjectCard from '../components/ProjectFrontCard';
import { FrontEndInformations } from "../data";
// import ContactFront from "./ContactFront";
import Header from "../components/header/Header";
import '../styles/FrontEnd.css';

function FrontEndProjects() {
  return (
    <div>
      <Header buttonBack="true"/>
    <div className="projects-container" >
     {
      FrontEndInformations.map((info) => <ProjectCard refs={ info.URLS } title={ info.ProjectName } key={ info.ProjectName } about={ info.AboutProject } /> )
     }
    </div>
    {/* <ContactFront /> */}
    </div>
  )
}

export default FrontEndProjects;
