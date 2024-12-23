import React from "react";
import "./DevSection.css";

const DevSection = ({ data }) => {
  const educationInfo = (data) => {
    const infoArray = data.education;

    return infoArray.map((info) => (
      <div className="dev-education-info-container">
        <p className="dev-year">{info.year}</p>
        <p className="dev-course">{`${info.coursetype} in ${info.course}`}</p>
        <p className="dev-school">{info.school}</p>
      </div>
    ));
  };

  const skillsInfo = (data) => {
    const infoArray = data.skills;

    return infoArray.map((skill) => <p>{skill}</p>);
  };

  return (
    <section id="dev-section" className="container">
      <div id="dev-grid">
        <div id="dev-education" className="dev-grid-item">
          <p className="dev-info-title">
            dev.<span>education</span>
          </p>
          <div id="dev-education-info">{educationInfo(data)}</div>
        </div>
        <div id="dev-experience" className="dev-grid-item">
          <p className="dev-info-title">
            dev.<span>experience</span>
          </p>
          <div id="dev-experience-info">
            <p className="ei-normal-text">I know you're asking:</p>
            <p className="ei-highlight-text">
              What is your professional experience, Renato?
            </p>
            <p className="ei-normal-text">
              Well, in code language:{" "}
              <span className="ei-code">
                let workExperience ={" "}
                <span className="ei-code-highlight">null</span>;
              </span>
            </p>
            <p className="ei-normal-text">
              So, I only need you to give me a chance to learn and work hard!
            </p>
            <p className="ei-normal-text">
              Let's change my <span className="ei-code">workExperience</span>{" "}
              together and turn it into:{" "}
            </p>
            <p className="ei-code">
              workExperience ={" "}
              <span className="ei-code-highlight">{`${"[{experience: firstExperience, workPlace: yourCompany, me: happyDeveloper}];"}`}</span>
            </p>
          </div>
        </div>
        <div id="dev-skills" className="dev-grid-item">
          {skillsInfo(data)}
        </div>
      </div>
    </section>
  );
};

export default DevSection;
