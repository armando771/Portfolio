import React from "react";
import { HardS, FirstLineTecnologies, SecondLineTecnologies, ThirdLineTecnologies} from './style';

function HardSkills() {
  return (
    <HardS>
     <p>Some Hard Skills Technologies I learned</p>
     <FirstLineTecnologies>
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript-icon"  />
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="Logo-React" />
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="logo-css" />
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="icon-HTML5" />
     </FirstLineTecnologies>
     <SecondLineTecnologies>
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="icon-jest" />
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="icon-git"/>
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="icon-redux"/>
     </SecondLineTecnologies>
     <ThirdLineTecnologies>
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="icon-mysql" />
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="icon-mongoDB" />
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Node-Logo" />
     </ThirdLineTecnologies>
    </HardS>
  )
}

export default HardSkills;
