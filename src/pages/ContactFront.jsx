import React from "react";

import "../styles/footerFront.css";

class ContactFront extends React.Component {
  render() {
    return (
      <footer className="footer-bar-front">
        <a
          className="link-footer-linkedin-front"
          href="https://www.linkedin.com/in/armando-starling-43b3b8201/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt="icon-linkedin"
            id="iconlinkedin-front"
          />
        </a>
        <a
          className="link-footer-github-front"
          href="https://github.com/armando771"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
            alt="icon-github"
            id="icongit-front"
          />
        </a>

        <p> Todos direitos reservados: Armando Guerra</p>
      </footer>
    );
  }
}

export default ContactFront;
