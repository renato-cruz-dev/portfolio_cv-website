import React from "react";
import "./PersonalInfo.css";

import myImg from "../../assets/images/me-myself-and-i_grey.png";

const PersonalInfo = () => {
  const calculateAge = () => {
    const birthDate = new Date("1996-04-14");
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDate.getMonth();

    if (currentMonth < birthMonth) {
      age--;
    } else if (currentMonth === birthMonth) {
      const currentDay = currentDate.getDate();
      const birthDay = birthDate.getDate();
      if (currentDay < birthDay) {
        age--;
      }
    }

    return age;
  };

  return (
    <div id="personal-item" className="about-grid-item">
      <p>personal info</p>
      <div id="personal-info-container">
        <ol id="personal-description" className="personal-info-item prime-brdr">
          <li>
            <span className="topic-number">1</span> Nice to meet you! I'm{" "}
            <span>Renato Cruz</span>, I’m beginning my career in programming.
          </li>
          <li>
            <span className="topic-number">2</span> I'm passionate about{" "}
            <span>cooking</span> and <span>coding</span>.
          </li>
          <li>
            <span className="topic-number">3</span> I've been working as a cook
            for years, from fine-dining to food-styling.
          </li>
          <li>
            <span className="topic-number">4</span> I am now looking to{" "}
            <span>turn my professional life around</span> and pursue my passion
            for coding.
          </li>
          <li>
            <span className="topic-number">5</span> My learning path has been
            focused on <span>Web Development</span> for now. I've taken{" "}
            <span>Full-Stack Development courses</span> and a lot of{" "}
            <span>self-learning</span>.
          </li>
          <li>
            <span className="topic-number">6</span> Everyday I'm learning new
            things and <span>I always want to keep learning</span>.
          </li>
          <li>
            <span className="topic-number">7</span> Currently{" "}
            <span>
              looking for a chance to begin my professional life as a developer!
            </span>
          </li>
        </ol>
        <ol id="personal-points" className="personal-info-item prime-brdr">
          <li>{calculateAge()} years old</li>
          <li>Born in Porto, Portugal</li>
          <li>Currently based in Porto, Portugal</li>
        </ol>
        <div id="personal-img-container" className="personal-info-item">
          <img src={myImg} alt="My Face" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
