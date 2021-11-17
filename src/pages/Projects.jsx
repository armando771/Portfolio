import React from 'react';
import Header from "../components/header/Header";
import '../styles/projects.css';
import PrincipalProjects from './PrincipalsProjects';
import Contact from './Contact';

function Projects(props){
  function SendToRoutes(route){
    const { history } = props;
    history.push(route)
  }
    return (
      <div> 
        <Header />
      <div id="main-container">
        <div id="informations-container">
        <h1 id="ttileProjects"> My Projects </h1>
        <p id="paragraphProjects">some projects made by me during my web development study </p>
        </div>
        <PrincipalProjects />
        <hr /> <hr />
         <div className="projects-container-pp">
         <button className="Front-End-Projects" onClick={ () => SendToRoutes('/projects/front-end') }><p className="paragraph-Front-End">Projects Front End</p></button>
         </div>
      </div>
      <Contact />
      </div>
    );
  };

export default Projects;
