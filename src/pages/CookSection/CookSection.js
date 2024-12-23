import React from "react";
import "./CookSection.css";
// import educationTitle from "../../assets/images/education_title.png";
// import experienceTitle from "../../assets/images/experience_title.png";

const CookSection = ({ data }) => {
  const educationInfo = (data) => {
    const infoArray = data.education;

    return infoArray.map((info) => (
      <div className="education-info-container">
        <p className="cook-year">{info.year}</p>
        <p className="cook-course">{`${info.coursetype} in ${info.course}`}</p>
        <p className="cook-school">{info.school}</p>
      </div>
    ));
  };

  const experienceInfo = (data) => {
    const infoArray = data.experience;

    return infoArray.map((info) => (
      <div className="experience-info-container">
        <p className="cook-year">{info.date}</p>
        <p className="cook-course">{`${info.position} in ${info.workplace}`}</p>
      </div>
    ));
  };

  return (
    <section id="cook-section" className="container">
      <p id="cook-section-title">cook</p>
      <div id="cook-info-container">
        <div id="cook-education">
          <p className="cook-title">education</p>
          <div className="cook-info">{educationInfo(data)}</div>
        </div>
        <div id="cook-experience">
          <p className="cook-title">experience</p>
          <div className="cook-info">{experienceInfo(data)}</div>
        </div>
      </div>
    </section>
  );
};

export default CookSection;
