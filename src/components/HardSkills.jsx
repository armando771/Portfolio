import React from "react";
import '../styles/about.css';

function HardSkills() {
  return (
    <div className="hardSkillsContainer">
     <p id="text-tecnologies">Some Hard Skills Technologies I learned</p>
     <div className="first-line-tecnologies">
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript-icon" className="icons-hard-skills" />
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="icon-react" className="icons-hard-skills"/>
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="logo-css" className="icons-hard-skills"/>
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="icon-HTML5" className="icons-hard-skills"/>
     </div>
     <div className="second-line-tecnologies">
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" className="icons-hard-skills" alt="icon-jest" />
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"className="icons-hard-skills" alt="icon-git"/>
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" className="icons-hard-skills" alt="icon-redux"/>
     </div>
     <div className="third-line-tecnologies">
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="icons-hard-skills" alt="icon-mysql"/>
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="icons-hard-skills" alt="icon-mongoDB"/>
     </div>
    </div>
  )
}

export default HardSkills;
