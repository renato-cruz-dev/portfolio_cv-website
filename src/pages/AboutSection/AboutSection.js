import React, { useRef, useEffect } from "react";
import "./AboutSection.css";

import Interests from "../../components/Interests/Interests";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import Hobbies from "../../components/Hobbies/Hobbies";

const AboutSection = () => {
  const titles = Array(50)
    .fill()
    .map(() => <li>about me</li>);

  const scroller = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const scrollPosition = window.scrollY;
        const scrollerInner = scroller.current.children[0];
        const scrollerInnerWidth = scrollerInner.offsetWidth;
        const translateX =
          ((scrollPosition / window.innerHeight) * scrollerInnerWidth) / 16;

        scrollerInner.style.transform = `translateX(${translateX}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about-section" className="container">
      <div id="about-section-container">
        <div id="about-section-header">
          <div ref={scroller} className="about-section-title-scroller">
            <ul className="about-section-title-list title-scroller-inner">
              {titles}
            </ul>
          </div>
        </div>
        <div id="about-grid">
          <PersonalInfo />
          <Hobbies />
          <Interests />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
