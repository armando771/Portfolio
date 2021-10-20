import React from "react";
import ContactFront from "./ContactFront";
import Header from "../components/Header";
import HardSkills from "../components/HardSkills";
import "../styles/about.css";

class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="about-container">
        <div className="about-container-informations">
          <h2 id="title-about">hello ,my name is Armando Guerra</h2>
          <h4 id="subtitle-about"> 
          i am Front End Developer<img id="react-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react-icon"/>
          </h4>
          <p className="paragraph-about" id="student">
          I'm a development student at<span id="about-Trybe">Trybe</span> </p>
          <p className="paragraph-about">
          Always a passion for technology, and in development it was where I found an opportunity to reconcile a passion with a future profession.
          </p>
        </div>
        <HardSkills />
        </div>
        <ContactFront />
      </>
    );
  }
}

export default About;
