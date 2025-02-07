import PropTypes from "prop-types";
import { useState } from "react";

import "./DevInfo.css";
import codeIcon from "../../../assets/icons/display-code.svg";

const DevInfo = ({ data, filter, getOrder }) => {
  const { education } = data;
  const [isClicked, setIsClicked] = useState("education");

  return (
    <div
      id="dev-info"
      className={`card category-card ${getOrder("dev")} ${
        filter !== "dev" && filter !== "all" ? "card__inactive" : ""
      }`}
    >
      <div className="category-content">
        <div className="category-header">
          <div className="category-icon">
            <img src={codeIcon} alt="code icon" />
          </div>
          <div className="category-title">
            <p className="button-title text__bold">coding</p>
          </div>
        </div>
        {isClicked === "experience" ? (
          <>
            <div className="card-info">
              <p className="text__regular">I know you{"'"}re asking:</p>
              <h5 className="text__bold">
                What{"'"}s your professional experience, Renato?
              </h5>
              <p className="text__regular">
                Well, in code language:{" "}
                <span className="text__bold">let workExperience = null;</span>
              </p>
              <p className="text__regular">
                So, I only need a chance to learn and work hard!
              </p>
              <h5 className="text__bold">
                Let{"'"}s change this variable together!
              </h5>
            </div>
          </>
        ) : (
          <>
            <div className="card-info">
              {education.map((info, index) => (
                <div key={index}>
                  <h5 className="text__bold">{info.year}</h5>
                  <p className="text__regular">{info.school}</p>
                  <p className="text__bold">{`${info.coursetype} in ${info.course}`}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="dev-buttons">
        <button
          id={`${isClicked === "education" ? "dev-btn__selected" : ""}`}
          onClick={() => setIsClicked("education")}
        >
          <p className="button-action text__regular">education</p>
        </button>
        <button
          id={`${isClicked === "experience" ? "dev-btn__selected" : ""}`}
          onClick={() => setIsClicked("experience")}
        >
          <p className="button-action text__regular">experience</p>
        </button>
      </div>
    </div>
  );
};

export default DevInfo;

DevInfo.propTypes = {
  data: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  getOrder: PropTypes.func.isRequired,
};
