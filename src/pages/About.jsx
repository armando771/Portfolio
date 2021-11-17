import React from "react";
import ContactFront from "../components/footer/ContactFront";
import Header from "../components/header/Header";
import HardSkills from "../components/hardSkills/HardSkills";
import { AboutMe, H4 } from './styles';

class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AboutMe>
        <section>
          <h2>Hello ,my name is Armando Guerra</h2>
          <H4> 
          i am Front End Developer<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react-icon"/>
          </H4>
          <p>
          I'm a development student at<span>Trybe</span> </p>
          <p>
          Always a passion for technology, and in development it was where I found an opportunity to reconcile a passion with a future profession.
          </p>
        </section>
        <HardSkills />
        </AboutMe>
        <ContactFront />
      </>
    );
  }
}

export default About;
