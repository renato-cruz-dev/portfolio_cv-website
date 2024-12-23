import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div id="footer-info-container" className="container">
        <div id="footer-contacts">
          <div id="footer-img-container">
            <img src={logo} alt="logo" />
          </div>
          <div id="footer-contacts-container">
            <a
              href="https://www.instagram.com/renato_cruz96/"
              rel="noreferrer"
              target="_blank"
            >
              instagram
            </a>
            <a
              href="https://www.facebook.com/renato.cruz.58"
              rel="noreferrer"
              target="_blank"
            >
              facebook
            </a>
            <a
              href="https://www.linkedin.com/in/
renato-cruz-79a747339
"
              rel="noreferrer"
              target="_blank"
            >
              linkedIn
            </a>
            <a href="mailto:renatogcruz96@gmail.com">e-mail</a>
            <a
              href="https://github.com/ren-cruz-dev"
              rel="noreferrer"
              target="_blank"
            >
              gitHub
            </a>
          </div>
        </div>
        <div id="footer-website-links-container">
          <p>page links</p>
          <div id="footer-website-links">
            <a href="#about-section">about</a>
            <a href="#cook-section">cook</a>
            <a href="#dev-section">dev</a>
            <a href="#portfolio-section">portfolio</a>
          </div>
        </div>
        <div id="footer-direct-contact">
          <p>say hi - renatogcruz96@gmail.com</p>
          <p>+351 917908447</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
