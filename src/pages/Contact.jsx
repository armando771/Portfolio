import React from "react";
import "../styles/footer.css";

class Contact extends React.Component {
  render() {
    return (
      <footer className="footer-bar">
        <a
          className="link-footer-linkedin"
          href="https://www.linkedin.com/in/armando-starling-43b3b8201/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt="icon-linkedin"
            id="iconlinkedin"
          />
        </a>
        <a
          className="link-footer-github"
          href="https://github.com/armando771"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
            alt="icon-github"
            id="icongit"
          />
        </a>
        <p> ©Armando Guerra Starling</p>
      </footer>
    );
  }
}

export default Contact;
