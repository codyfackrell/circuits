import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="racing-circuits-logo" className="logo" />
      </a>
    </header>
  );
};

export default Header;
