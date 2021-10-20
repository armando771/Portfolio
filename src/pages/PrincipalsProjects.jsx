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
        <p className="trivia-description">
Project made using React.js and Redux where we use a Trivia API to create a mini-game that consists of a sequence of five questions, with a ranking score
being saved in the application itself.</p>
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
        <p className="pixels-description">pixel art project that allows the user to color, erase, change small squares to the desired color</p>
      </div>
      <div className="wallet-project-container">
        <p>
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
        </p>
        <img src={walletIMG} alt="wallet-project" />
      </div>
      <div className="front-project-container">
        <img src={frontIMG} alt="reply-mercado-livre-site" />
        <p>
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
        </p>
      </div>
    </>
  );
}

export default PrincipalProjects;
