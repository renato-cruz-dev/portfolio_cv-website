import React, { useState } from "react";
import "./NavBar.css";
import navIcon from "../../assets/nav/bars_menu.svg";
import closeIcon from "../../assets/nav/close_menu.svg";
import instaIcon from "../../assets/contacts/square-instagram.svg";
import facebookIcon from "../../assets/contacts/square-facebook.svg";
import linkedInIcon from "../../assets/contacts/square-linkedin.svg";
import emailIcon from "../../assets/contacts/square-envelope.svg";
import gitIcon from "../../assets/contacts/square-github.svg";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="nav-container" className="container">
      <div id="website-nav-bar">
        <div id="website-hamburger">
          <section className={`nav-website-links ${isOpen ? "active" : ""}`}>
            <a className="prime-clr" href="#about-section" id="about-link">
              about
            </a>
            <a className="prime-clr" href="#cook-section" id="cook-link">
              cook
            </a>
            <a className="prime-clr" href="#dev-section" id="dev-link">
              dev
            </a>
            <a
              className="prime-clr"
              href="#portfolio-section"
              id="portfolio-link"
            >
              portfolio
            </a>
          </section>
        </div>
        <div id="nav-contact-links">
          <button
            id="menu-btn"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <img id="menu-close-btn-icon" src={closeIcon} alt="close-icon" />
            ) : (
              <img id="menu-btn-icon" src={navIcon} alt="nav-icon" />
            )}
          </button>
          <a
            href="https://www.instagram.com/renato_cruz96/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={instaIcon} alt="Instagram Icon" />
          </a>
          <a
            href="https://www.facebook.com/renato.cruz.58"
            rel="noreferrer"
            target="_blank"
          >
            <img src={facebookIcon} alt="Facebook Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/
renato-cruz-79a747339
"
            rel="noreferrer"
            target="_blank"
          >
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
          <a href="mailto:renatogcruz96@gmail.com">
            <img src={emailIcon} alt="Email Icon" />
          </a>
          <a
            href="https://github.com/ren-cruz-dev"
            rel="noreferrer"
            target="_blank"
          >
            <img src={gitIcon} alt="Git Icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
