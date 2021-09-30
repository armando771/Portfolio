import React from "react";
import ImagePortfolio from "../images/imagePortfolio.jpg";
import Contact from "./Contact";
import Header from "../components/Header";
import "../styles/home.css";

function Home() {
    return (
      <>
        <Header />
        <main className="mainHomeContainer">
          <div className="informationsHome">
            <h1 id="title-home"> MEU PORTFOLIO </h1>
            <h4> Ola! Me chamo Armando. </h4>
            <p> Sou estudante de desenvolvimento web na Trybe</p>
          </div>
          <img
            src={ImagePortfolio}
            alt="Foto do Autor do Portifolio"
            className="picture"
          />
          <Contact />
        </main>
      </>
    );
  }

export default Home;
