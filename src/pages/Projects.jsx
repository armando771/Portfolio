import React from 'react';
import Header from '../components/Header';
import '../styles/projects.css';
import PrincipalProjects from './PrincipalsProjects';
import ContactFront from './ContactFront';

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
         <button className="FunctionsProjects" onClick={ () => SendToRoutes('/projects/functions') }><p className="paragraph-Functions">Projects Functions</p></button>
         <button className="BackEndProjects" onClick={ () => SendToRoutes('/projects/back-end') }><p className="paragraph-Back-End">Projects Back End</p></button>
         </div>
      </div>
      <ContactFront />
      </div>
    );
  };

export default Projects;
