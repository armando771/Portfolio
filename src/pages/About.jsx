import React from "react";
import Contact from "./Contact";
import Header from "../components/Header";
import "../styles/about.css";

class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="about-container">
          <h2 id="title-about"> Meu nome e Armando Guerra Starling</h2>
          <h4 id="subtitle-about">
            Sou natural de Belo-Horizonte Minas Gerais
          </h4>
          <p className="paragraph-about">
            Atualmente estudo Desenvolvimento Web na
            <span id="about-Trybe">Trybe</span>
          </p>
          <p className="paragraph-about">
            Sempre tive uma paixão por tecnologia, e no desenvolvimento foi onde
            encontrei uma oportunidade de conciliar uma paixao a uma futura
            profissão.
          </p>
          <p className="paragraph-about">
            A cada erro,tentativa,frustação nesta caminhada que estou trilhando,
            me vejo cada vez mais engajado e motivado a sempre melhorar e
            estudar cada vez mais para me tornar um excelente desenvolvedor!
          </p>
          <Contact />
        </div>
      </>
    );
  }
}

export default About;
