import React from "react";
import "./PortfolioSection.css";
import gitHubIcon from "../../assets/links/github-icon.svg";
import linkIcon from "../../assets/links/link-icon.svg";

const PortfolioSection = ({ data }) => {
  const makePortfolioItem = (data) => {
    return data.map((project) => (
      <div className="portfolio-item">
        <div className="portfolio-info">
          <p className="project-name">{project.project}</p>
          <p className="project-year">{project.year}</p>
          {project.collaborators ? (
            <p className="project-tag-title">
              Collaborators:{" "}
              <span className="project-tag-description">
                {project.collaborators}
              </span>
            </p>
          ) : null}
          <p className="project-tag-title">
            Working for:{" "}
            <span className="project-tag-description">{project.workFor}</span>
          </p>
        </div>
        <div className="project-links">
          {project.link ? (
            <a className="project-link" href={project.link} target="_blank">
              <img src={linkIcon} alt="link-icon" />
            </a>
          ) : null}
          <a className="project-link" href={project.gitHubLink} target="_blank">
            <img src={gitHubIcon} alt="git-hub-icon" />
          </a>
        </div>
      </div>
    ));
  };
  return (
    <section id="portfolio-section" className="container">
      <p id="portfolio-title">portfolio</p>
      <div id="portfolio-grid">{makePortfolioItem(data)}</div>
    </section>
  );
};

export default PortfolioSection;
