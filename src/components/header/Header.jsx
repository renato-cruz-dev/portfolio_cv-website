import PropTypes from "prop-types";
import { useState } from "react";

import "./Header.css";
import photo from "../../assets/me-myself-and-i.png";
import menuIcon from "../../assets/icons/menu-icon.png";

import Nav from "../nav/Nav";
import HamburguerNav from "../nav/hamburguerNav/HamburguerNav";

const Header = ({ filter, setFilter }) => {
  const [isClicked, setIsClicked] = useState("closed");

  return (
    <header>
      {isClicked === "closed" ? (
        <img id="logo" src={photo} alt="photo of Renato" />
      ) : (
        ""
      )}
      <Nav filter={filter} setFilter={setFilter} />
      <div id="contact-button-container">
        <a
          id="contact-button"
          href="mailto: renatogcruz96@gmail.com"
          className="text__regular"
        >
          Contact
        </a>
      </div>
      {isClicked === "closed" ? (
        <button id="hamburguer-button" onClick={() => setIsClicked("opened")}>
          <img src={menuIcon} alt="hamburguer menu icon" />
        </button>
      ) : (
        <>
          <HamburguerNav
            filter={filter}
            setFilter={setFilter}
            setIsClicked={setIsClicked}
          />
        </>
      )}
    </header>
  );
};

Header.propTypes = {
  filter: PropTypes.string.isRequired, // Ensure filter is a required string
  setFilter: PropTypes.func.isRequired, // Ensure setFilter is a required function
};

export default Header;
