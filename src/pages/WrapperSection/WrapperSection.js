import React from "react";
import "./WrapperSection.css";

const WrapperSection = () => {
  return (
    <section id="wrapper-section">
      <div id="main-wrapper" className="container">
        <div id="main-wrapper-info" className="second-clr">
          <p>Hello, World!</p>
          <p>
            I'm <span className="prime-clr">Renato Cruz</span>, a{" "}
            <span className="prime-clr">really junior developer</span> waiting
            for an{" "}
            <span className="prime-clr">opportunity to grow and learn</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WrapperSection;
