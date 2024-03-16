import React from "react";
import "./Component.css";
const Header = () => {
  return (
    <div className="navbar">
      <div>
        <h1 className="header">Recruitment System</h1>
      </div>
      <nav>
        <a className="nav-a" href="/">
          Home
        </a>
        <a className="nav-a" href="/">
          Jobs
        </a>
        <a className="nav-a" href="/">
          Jobs Applied
        </a>
        <a className="nav-a" href="/">
          About Us
        </a>
      </nav>
    </div>
  );
};

export default Header;
