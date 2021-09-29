import React from "react";
import ImagePortfolio from '../images/imagePortfolio.jpg';
import "../styles/home.css";
import Contact from "./Contact";

class Home extends React.Component {
  render() {
    return (
      <main className="mainHomeContainer">
        <div className="informationsHome">
          <h1 id="title-home"> MEU PORTFOLIO </h1>
          <h4> Ola! Me chamo Armando. </h4>
          <p> Sou estudante de desenvolvimento web na Trybe</p>
        </div>
        <img
          src={ ImagePortfolio }
          alt="Foto do Autor do Portifolio"
          className="picture"
        />
        <Contact />
      </main>
    );
  }
}

export default Home;
