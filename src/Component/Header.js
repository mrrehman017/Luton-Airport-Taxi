import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Header_logo from "../assets/Images/Logo.jpg";
import Banner from "./Banner";
import "../Component/style.css";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const Header = ({ scrollToTop }) => {
  const [sideMenu, setSideMenu] = useState(false);
  // eslint-disable-next-line
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerStyle, setHeaderStyle] = useState({ backgroundColor: "transparent" });
  const sideMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMenu && sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        setSideMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideMenu]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // Change header background color when scroll position is 20px or more
      if (position >= 20) {
        setHeaderStyle({ backgroundColor: "white" });
      } else {
        setHeaderStyle({ backgroundColor: "transparent" }); // or your default background color
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, []);
  const handleClick = (e) => {
    setSideMenu(false); // Close side menu
    scrollToTop(); // Scroll to top
  };

  return (
    <section className="header_section" id="Header">
      <header style={headerStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-4">
              <Link to="/" onClick={scrollToTop}>
                <div className="header_log">
                  <img src={Header_logo} alt="Logo" />
                </div>
              </Link>
            </div>
            <div className="col-sm-8 ms-5">
              <div className="navbar">
                <Link className="nav-link" activeclassname="active" onClick={scrollToTop} to="/">
                  Home
                </Link>
                <Link className="nav-link" activeclassname="active" to="#AboutUs">
                  About Us
                </Link>
                <Link className="nav-link" activeclassname="active" to="#Journey">
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

              <div className="hamburger">
                <button className="btn" onClick={(e) => setSideMenu(true)}>
                  <FaBars />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Banner />

      <div className={sideMenu ? "mobile_menu mobile_menu_active" : "mobile_menu"} ref={sideMenuRef}>
        <button className="cross_btn" onClick={(e) => setSideMenu(false)}>
          <IoMdClose />
        </button>
        <div className="navbarMian">
          <Link className="nav-link" activeclassname="active" to="/" onClick={handleClick}>
            Home
          </Link>
          <Link className="nav-link" activeclassname="active" onClick={(e) => setSideMenu(false)} to="#AboutUs">
            About Us
          </Link>
          <Link className="nav-link" activeclassname="active" onClick={(e) => setSideMenu(false)} to="#journey">
            Our Fleet
          </Link>
          <Link className="nav-link" activeclassname="active" onClick={(e) => setSideMenu(false)} to="#Footer">
            Contact Us
          </Link>
          <Link className="nav-link" activeclassname="active" onClick={(e) => setSideMenu(false)} to="#NewsSection">
            Business Account
          </Link>
          <Link className="nav-link" activeclassname="active" onClick={(e) => setSideMenu(false)} to="#TexiTransfer">
            Drive For Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
