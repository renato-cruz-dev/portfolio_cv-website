import PropTypes from "prop-types";
import "./DevSkills.css";

const DevSkills = ({ data, filter, getOrder }) => {
  return (
    <div
      id="dev-skills"
      className={`card ${getOrder("dev")} ${
        filter !== "dev" && filter !== "all" ? "card__inactive" : ""
      }`}
    >
      {data.skills.map((skill) => {
        return (
          <div
            id={`${skill.language}-skill`}
            className="dev-skill"
            key={skill.language}
          >
            <div className="skill-img">
              <img
                src={`../../../assets/${skill.icon}`}
                alt={`${skill.language} icon`}
              />
            </div>
            <p className="text__regular">{skill.language}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DevSkills;

DevSkills.propTypes = {
  data: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  getOrder: PropTypes.func.isRequired,
};
