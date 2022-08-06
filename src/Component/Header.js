import React, { useState } from "react";
// import {Link} from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link";
import Header_logo from "../assets/Images/Logo.jpg";
import Banner from "./Banner";
import "../Component/style.css";
import { FaBars } from "react-icons/fa";

export const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <section className="header_section" id="Header">
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-4">
              <Link to="/">
                <div className="header_log">
                  <img src={Header_logo} alt="Logo" />
                </div>
              </Link>
            </div>
            <div className="col-sm-8 ms-5">
              <div className="navbar">
                <Link className="nav-link" activeclassname="active" to="/">
                  Home
                </Link>
                <Link
                  className="nav-link"
                  activeclassname="active"
                  to="#AboutUs"
                >
                  About Us
                </Link>
                <Link
                  className="nav-link"
                  activeclassname="active"
                  to="#journey"
                >
                  Our Fleet
                </Link>
                <Link
                  className="nav-link"
                  activeclassname="active"
                  to="#Footer"
                >
                  Contact Us
                </Link>
                <Link
                  className="nav-link"
                  activeclassname="active"
                  to="#NewsSection"
                >
                  Business Account
                </Link>
                <Link
                  className="nav-link"
                  activeclassname="active"
                  to="#TexiTransfer"
                >
                  Drive For Us
                </Link>
              </div>

              <div className="hamburger">
                <button className="btn" onClick={(e) => setSideMenu(!sideMenu)}>
                  <FaBars />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Banner />

      <div
        className={sideMenu ? "mobile_menu mobile_menu_active" : "mobile_menu"}
      >
        <div className="navbarMian">
        <Link className="nav-link" activeclassname="active" to="/">
          Home
        </Link>
        <Link className="nav-link" activeclassname="active" to="#AboutUs">
          About Us
        </Link>
        <Link className="nav-link" activeclassname="active" to="#journey">
          Our Fleet
        </Link>
        <Link className="nav-link" activeclassname="active" to="#Footer">
          Contact Us
        </Link>
        <Link className="nav-link" activeclassname="active" to="#NewsSection">
          Business Account
        </Link>
        <Link className="nav-link" activeclassname="active" to="#TexiTransfer">
          Drive For Us
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
