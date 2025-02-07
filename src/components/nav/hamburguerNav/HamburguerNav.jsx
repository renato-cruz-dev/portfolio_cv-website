import PropTypes from "prop-types";

import "./HamburguerNav.css";
import closeIcon from "../../../assets/icons/close-icon.png";

const Nav = ({ filter, setFilter, setIsClicked }) => {
  return (
    <nav id="hamburguer-nav">
      <button id="close-menu-button" onClick={() => setIsClicked("closed")}>
        <img src={closeIcon} alt="close menu icon" />
      </button>
      <div className="nav-buttons">
        <button
          id="all"
          className={`nav-button text__regular ${
            filter === "all" ? "nav-button__selected" : ""
          }`}
          onClick={() => {
            setFilter("all");
            setIsClicked("closed");
          }}
        >
          All
        </button>
        <button
          id="about"
          className={`nav-button text__regular ${
            filter === "about" ? "nav-button__selected" : ""
          }`}
          onClick={() => {
            setFilter("about");
            setIsClicked("closed");
          }}
        >
          About
        </button>
        <button
          id="cook"
          className={`nav-button text__regular ${
            filter === "cook" ? "nav-button__selected" : ""
          }`}
          onClick={() => {
            setFilter("cook");
            setIsClicked("closed");
          }}
        >
          Cook
        </button>
        <button
          id="dev"
          className={`nav-button text__regular ${
            filter === "dev" ? "nav-button__selected" : ""
          }`}
          onClick={() => {
            setFilter("dev");
            setIsClicked("closed");
          }}
        >
          Dev
        </button>
        <button
          id="portfolio"
          className={`nav-button text__regular ${
            filter === "portfolio" ? "nav-button__selected" : ""
          }`}
          onClick={() => {
            setFilter("portfolio");
            setIsClicked("closed");
          }}
        >
          Portfolio
        </button>
      </div>
      <div id="hamburguer-contact-button-container">
        <a
          id="contact-button"
          href="mailto: renatogcruz96@gmail.com"
          className="text__regular"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  setIsClicked: PropTypes.func.isRequired,
};

export default Nav;
