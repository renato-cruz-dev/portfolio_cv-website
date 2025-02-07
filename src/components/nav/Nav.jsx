import PropTypes from "prop-types";
import "./Nav.css";

const Nav = ({ filter, setFilter }) => {
  return (
    <nav id="default-nav">
      <button
        id="all"
        className={`nav-button text__regular ${
          filter === "all" ? "nav-button__selected" : ""
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        id="about"
        className={`nav-button text__regular ${
          filter === "about" ? "nav-button__selected" : ""
        }`}
        onClick={() => setFilter("about")}
      >
        About
      </button>
      <button
        id="cook"
        className={`nav-button text__regular ${
          filter === "cook" ? "nav-button__selected" : ""
        }`}
        onClick={() => setFilter("cook")}
      >
        Cook
      </button>
      <button
        id="dev"
        className={`nav-button text__regular ${
          filter === "dev" ? "nav-button__selected" : ""
        }`}
        onClick={() => setFilter("dev")}
      >
        Dev
      </button>
      <button
        id="portfolio"
        className={`nav-button text__regular ${
          filter === "portfolio" ? "nav-button__selected" : ""
        }`}
        onClick={() => setFilter("portfolio")}
      >
        Portfolio
      </button>
    </nav>
  );
};

Nav.propTypes = {
  filter: PropTypes.string.isRequired, // Ensure filter is a required string
  setFilter: PropTypes.func.isRequired, // Ensure setFilter is a required function
};

export default Nav;
