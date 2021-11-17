import React from "react";
import { Footer } from './style.js'

class ContactFront extends React.Component {
  render() {
    return (
      <Footer>
        <a
          href="https://www.linkedin.com/in/armando-starling-43b3b8201/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt="icon-linkedin"
          />
        </a>
        <a
          href="https://github.com/armando771"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
            alt="icon-github"
          />
        </a>
        <p>©Armando Guerra Starling</p>
      </Footer>
    );
  }
}

export default ContactFront;
