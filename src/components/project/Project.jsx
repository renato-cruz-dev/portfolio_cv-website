import PropTypes from "prop-types";

import "./Project.css";
import gitIcon from "../../assets/icons/github-icon.png";

const Project = ({ filter, getOrder, index, project }) => {
  return (
    <div
      key={index}
      id={`project-${project.code}`}
      className={`card project-card ${getOrder("portfolio")} ${
        filter !== "portfolio" && filter !== "all" ? "card__inactive" : ""
      }`}
    >
      <div className="project-header">
        <div className="project-title">
          <p className="button-title text__bold">{project.project}</p>
        </div>
        <div className="project-info">
          <p className="text__regular">{project.done}</p>
          <p className="text__regular">{project.workFor}</p>
          {project.collaborators ? (
            <>
              <p className="text__bold">collaborators</p>
              <p className="text__regular">{project.collaborators}</p>
            </>
          ) : null}
        </div>
      </div>
      <a href="" className="git-button">
        <img src={gitIcon} alt="git hub icon with link to project" />
        <p className="button-action text__regular">gitHub</p>
      </a>
    </div>
  );
};

export default Project;

Project.propTypes = {
  filter: PropTypes.string.isRequired,
  getOrder: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
