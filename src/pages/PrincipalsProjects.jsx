import React from "react";
import frontIMG from "../images/frontend.png";
import pixelsIMG from "../images/pixels.png";
import triviaIMG from "../images/trivia.png";
import walletIMG from "../images/wallet.png";
import "../styles/Principals.css";

function PrincipalProjects() {
  return (
    <>
      <div className="trivia-project-container">
        <div className="trivia-description">
          <p>
            Project made using React.js and Redux where we use a Trivia API to
            create a mini-game that consists of a sequence of five questions,
            with a ranking score being saved in the application itself.
          </p>
          <p>Tecnologies</p>
          <p>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="a"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="a"
            />
          </p>
        </div>
        <div className="trivia-paragraph">
          <a
            href="https://armando771.github.io/ProjectTriviaRedux/"
            rel="noreferrer"
            target="_blank"
          >
            Access Project
          </a>
          <a
            href="https://github.com/armando771/ProjectTriviaRedux/tree/master/src"
            rel="noreferrer"
            target="_blank"
          >
            Access repository
          </a>
        </div>
        <img src={triviaIMG} alt="game-trivia" />
      </div>
      <hr />
      <div className="pixels-project-container">
        <img src={pixelsIMG} alt="pixels-art" />
        <div className="pixels-paragraph">
          <a
            href="https://armando771.github.io/Color-Palet.github.io/"
            rel="noreferrer"
            target="_blank"
          >
            Access Project
          </a>
          <a
            href="https://github.com/armando771/Color-Palet.github.io"
            rel="noreferrer"
            target="_blank"
          >
            Access repository
          </a>
        </div>
        <div className="pixels-description">
          <p className="px">
            pixel art project that allows the user to color, erase, change small
            squares to the desired color
          </p>
          <p>Tecnologies</p>
          <p>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="a"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              alt="a"
            />
          </p>
        </div>
      </div>
      <hr />
      <div className="wallet-project-container">
        <div className="wallet-description">
          <p>
              project made using React.js and Redux where we use a currency conversion API (updated daily)
              where it allows the user to add expenses in other currencies to be converted to real
          </p>
          <p>Tecnologies</p>
          <p>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="a"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="a"
            />
          </p>
        </div>
        <div className="wallet-paragraph">
          <a
            href="https://armando771.github.io/wallet/"
            rel="noreferrer"
            target="_blank"
          >
            Access Project
          </a>
          <a
            href="https://github.com/armando771/wallet/tree/master/src"
            rel="noreferrer"
            target="_blank"
          >
            Access repository
          </a>
        </div>
        <img src={walletIMG} alt="game-trivia" />
      </div>
      <hr />
      <div className="front-project-container">
        <img src={frontIMG} alt="reply-mercado-livre-site" />
        <div className="front-paragraph">
          <a
            href="https://armando771.github.io/Project-FrontEnd/"
            rel="noreferrer"
            target="_blank"
          >
            Access Project
          </a>
          <a
            href="https://github.com/armando771/Project-FrontEnd/tree/master/src"
            rel="noreferrer"
            target="_blank"
          >
            Access repository
          </a>
        </div>
        <div className="front-description">
          <p>
          Project in React.JS made using an API from Mercado Livre. Where we interact with products and categories to make a functionality interface similar to the original site
          </p>
          <p>Tecnologies</p>
          <p>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="a" />
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="a" />
          </p>
        </div>
      </div>
    </>
  );
}

export default PrincipalProjects;
