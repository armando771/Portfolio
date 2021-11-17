import React from "react";
import ImagePortfolio from "../images/imagePortfolio.jpg";
import ContactFront from "../components/footer/ContactFront";
import Header from "../components/header/Header";
import FormEmail from "../components/form/FormEmail";
import "../styles/home.css";

function Home() {
    return (
      <>
        <Header />
        <main className="mainHomeContainer">
          <div> </div>
          <div className="informationsHome">
            <h2 className="home-text">hello. I am</h2>
            <h1 className="home-text-name">Armando Guerra</h1>
            <p className="isDeveloperContainer animation-css"><span id="const">const</span><span id="developer">IsDeveloper</span><span id="recebe">=</span><span id="true">true</span></p>
          </div>
          <img
            src={ImagePortfolio}
            alt="Foto do Autor do Portifolio"
            className="picture"
          />
        </main>
        <FormEmail />
        <ContactFront />
      </>
    );
  }

export default Home;
