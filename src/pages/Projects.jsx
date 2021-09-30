import React from 'react';
import Contact from "./Contact";
import Header from '../components/Header';
import '../styles/projects.css'

function Projects(props){
  function SendToFrontEnd(){
    const { history } = props;
    history.push('/projects/front-end')
  }
    return (
      <div> 
        <Header />
      <div id="main-container">
        <div id="informations-container">
        <h1 id="ttileProjects"> My Projects </h1>
        <p id="paragraphProjects"> Aqui esta um pouco sobre o que ja fiz nesta caminhada como estudante de desenvolvimento </p>
        </div>
        <hr />
         <button className="Front-End-Projects" onClick={ () => SendToFrontEnd() }><p className="paragraph-Front-End">Projects Front End</p></button>
      </div>
      <Contact />
      </div>
    );
  };

export default Projects;
