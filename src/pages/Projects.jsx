import React from 'react';

import '../styles/projects.css'

class Projects extends React.Component {
  render() {
    return (
      <div id="main-container">
        <div id="informations-container">
        <h1> My Projects </h1>
        <p id="paragraph"> Aqui esta um pouco sobre o que ja fiz nesta caminhada como estudante de desenvolvimento </p>
        </div>
        <div id="links-container">
        <a href="https://armando771.github.io/Color-Palet.github.io/" target="_blank">Project: Pixel Art</a>
        <a href="https://github.com/tryber/sd-012-project-zoo-functions/blob/Armando-Guerra-zoo-functions-project/src/zoo.js" target="_blank">Project: Zoo Functions</a>
        <a href="https://github.com/tryber/sd-012-project-shopping-cart/blob/armando-guerra-shopping-cart-project/script.js" target="_blank">Project: Shopping Cart</a>
        <a href="https://github.com/tryber/sd-012-project-jest/tree/armando-guerra-project-jest/test" target="_blank">Project: Test Jest</a>
        <a href="https://github.com/tryber/sd-012-project-react-testing-library/tree/Armando-Guerra-Project-React-Testing-Library/src/tests" target="_blank">Project: Test React Library</a>
        <a href="https://github.com/tryber/sd-12-project-frontend-online-store/tree/main-group-7/src/components" target="_blank">Project: Front End Online Store</a>
        <a href="https://github.com/tryber/sd-012-project-todo-list/blob/armando-guerra-project-todo-list/script.js" target="_blank">Project: Todo List</a>
        </div>
      </div>
    );
  };
}

export default Projects;
