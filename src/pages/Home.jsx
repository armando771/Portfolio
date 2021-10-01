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
          <div> </div>
          <div className="informationsHome">
            <h2 className="home-text"> hello. I am </h2>
            <h1 className="home-text-name"> Armando Guerra</h1>
            <p className="isDeveloperContainer animation-css"><span id="const">const</span><span id="developer">IsDeveloper</span><span id="recebe">=</span><span id="true">true</span> </p>
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
