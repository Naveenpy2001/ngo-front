import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/header2.css";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <h1 className="centerH1">BETHESDA GOSPEL MINISTRY TRUST</h1>
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/AboutUs">About Us</NavLink>
            </li>

            <li>
              <NavLink to="/Services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/Document">Document</NavLink>
            </li>
            <li>
              <NavLink to="/PartnersPage">partners with us</NavLink>
            </li>

            <li>
              <NavLink to="/staff/login"> Staff Login</NavLink>
            </li>
            <li>
              <NavLink to="/ContactUs">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/Donation-Page"> Donation</NavLink>
            </li>

            <li>
              <Link to="/DonationPage#donation" className="DonateButton">
                {" "}
                Donate Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

const Logo = () => (
  <>
    <img
      src="https://static.wixstatic.com/media/8b6520_76fb9754389d441b95bd5ba5df024c10~mv2.png/v1/fill/w_144,h_134,al_c,q_85,usm_1.20_1.00_0.01,enc_auto/8b6520_76fb9754389d441b95bd5ba5df024c10~mv2.png"
      alt="logo"
      width='30%'
    />
  </>
);

export default Header;
