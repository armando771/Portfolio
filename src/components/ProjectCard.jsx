import React from "react";
import "../styles/projects.css";

function ProjectCard(props) {
  const { refs, title, about } = props;

  return (
    <a href={refs} target="_blank" rel="noreferrer">
      <section className="links-container">
        <p className="links-projects">{title}</p>
        <p className="Descriptions-Projects">{about}</p>
      </section>
    </a>
  );
}

export default ProjectCard;
