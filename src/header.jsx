import React from "react";
import "./css/header.css";
import { PiChurch } from "react-icons/pi";
const Header = () => {
  return (
    <div>
      <header className="ngo-header">
        <h3></h3>
        <h1 className="header-h1">
          <PiChurch className="churchIcon"/>
          - BETHESDA GOSPEL MINISTRY -<PiChurch className="churchIcon"/>
        </h1>
        <nav className="header-nav">
          <a href="#!" className="nav-link">
            home{" "}
          </a>
          <a href="#!" className="nav-link">
            about us{" "}
          </a>
          <a href="#!" className="nav-link">
            services{" "}
          </a>
          <a href="#!" className="nav-link">
            gallery{" "}
          </a>
          <a href="#!" className="nav-link">
            documents{" "}
          </a>
          <a href="#!" className="nav-link">
            partners with us
          </a>
          <a href="#!" className="nav-link">
            contact us{" "}
          </a>
          <a href="#!" className="nav-link">
            staff login{" "}
          </a>
          <a href="#!" className="nav-link">
            donation
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
