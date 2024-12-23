import React, { useState, useEffect } from "react";
import "./Header.css";

import logo from "../../assets/images/logo.png";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="container">
      <div id="img-container">
        <img
          src={logo}
          alt="logo"
          className={scrollY > 0 ? "animate-logo" : ""}
        />
      </div>
    </header>
  );
};

export default Header;
