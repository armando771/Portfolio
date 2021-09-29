import React from "react";
import '../styles/projects.css';

function ProjectCard(props) {
  const { refs, title } = props;
  return (
    <section className="links-container">
       <p className="links"><a href={ refs } target="_blank" rel="noreferrer" >{title}</a></p>
    </section>
  )
}

export default ProjectCard;
