import React from 'react';
import Contact from "./Contact";
import '../styles/projects.css'

function Projects(props){
  function SendToFrontEnd(){
    const { history } = props;
    history.push('/projects/front-end')
  }
    return (
      <div> 
      <div id="main-container">
        <div id="informations-container">
        <h1> My Projects </h1>
        <p id="paragraph"> Aqui esta um pouco sobre o que ja fiz nesta caminhada como estudante de desenvolvimento </p>
        </div>
        <hr />
         <button className="Front-End-Projects" onClick={ () => SendToFrontEnd() }><p className="paragraph-Front-End">Projects Front End</p></button>
      </div>
      <Contact />
      </div>
    );
  };

export default Projects;
