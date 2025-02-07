import PropTypes from "prop-types";
import { useState } from "react";

import "./CookInfo.css";
import cookIcon from "../../assets/icons/hat-chef.svg";

const CookInfo = ({ data, filter, getOrder }) => {
  const { experience, education } = data;
  const [isClicked, setIsClicked] = useState("education");

  console.log(isClicked);

  return (
    <div
      id="cook-info"
      className={`card category-card cook-card ${getOrder("cook")} ${
        filter !== "cook" && filter !== "all" ? "card__inactive" : ""
      }`}
    >
      <div className="category-content">
        <div className="category-header">
          <div className="category-icon">
            <img src={cookIcon} alt="cook icon" />
          </div>
          <div className="category-title">
            <p className="button-title text__bold">cooking</p>
          </div>
        </div>
        {isClicked === "experience" ? (
          <>
            <div className="card-info">
              {experience.map((info, index) => (
                <div key={index}>
                  <h5 className="text__bold">{info.date}</h5>
                  <p className="text__regular">{`${info.position} at ${info.workplace}`}</p>
                </div>
              ))}
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
      <div className="cook-buttons">
        <button
          id={`${isClicked === "education" ? "cook-btn__selected" : ""}`}
          onClick={() => setIsClicked("education")}
        >
          <p className="button-action text__regular">education</p>
        </button>
        <button
          id={`${isClicked === "experience" ? "cook-btn__selected" : ""}`}
          onClick={() => setIsClicked("experience")}
        >
          <p className="button-action text__regular">experience</p>
        </button>
      </div>
    </div>
  );
};

export default CookInfo;

CookInfo.propTypes = {
  data: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  getOrder: PropTypes.func.isRequired,
};
