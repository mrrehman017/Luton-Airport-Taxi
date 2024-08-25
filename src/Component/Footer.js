import React from "react";
import FooterLogo from "../assets/Images/Logo.png";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { RiPhoneLine } from "react-icons/ri";
import { TbMail } from "react-icons/tb";
import CopyRight from "./CopyRight";
import { HashLink as Link } from "react-router-hash-link";

export const Footer = ({ scrollToTop }) => {
  return (
    <>
      <section className="footermainSection" id="Footer">
        <footer>
          <div className="container">
            <div className="row newformobile">
              <div className="col-lg-3 col-md-12 col-sm-6 footer_part_one_mobile">
                <div className="footerPartOne">
                  <Link to="/" onClick={scrollToTop} className="footerLOGO">
                    <img src={FooterLogo} alt="" />
                    <p>Lutonairporttaxi.co.uk</p>
                  </Link>
                  <div className="footerADDress">
                    <p>960 Capability Green, Luton, Bedfordshire LU1 3PL.</p>
                  </div>
                  <div className="footerSocialIcon">
                    <button activeclassname="active">
                      <FiFacebook />
                    </button>
                    <button activeclassname="active">
                      <FaTwitter />
                    </button>
                    <button activeclassname="active">
                      <FiInstagram />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 footer_part_two_mobile">
                <div className="footerListOne">
                  <div className="footerListHeading">
                    <p>Navigation</p>
                  </div>
                  <div className="footerListMenu">
                    <ul className="navbar">
                      <Link className="nav-link-footer" activeclassname="active" to="/" onClick={scrollToTop}>
                        Home
                      </Link>
                      <Link className="nav-link-footer" activeclassname="active" to="#AboutUs">
                        About Us
                      </Link>
                      <Link className="nav-link-footer" activeclassname="active" to="#Journey">
                        Our Fleet
                      </Link>
                      <Link className="nav-link-footer" activeclassname="active" to="#TexiTransfer">
                        Join as a driver
                      </Link>
                      <Link className="nav-link-footer" activeclassname="active" to="#NewsSection">
                        Business Account
                      </Link>
                      <Link className="nav-link-footer" activeclassname="active" to="#Footer">
                        Contact Us
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 footer_part_three_mobile">
                <div className="footerList">
                  <div className="footerListHeading">
                    <p>Airport Transfers</p>
                  </div>
                  <div className="footerListMenu">
                    <ul className="navbar">
                      <li className="nav-link-footer" to="/">
                        Luton Airport
                      </li>
                      <li className="nav-link-footer" to="/">
                        Heathrow Airport
                      </li>
                      <li className="nav-link-footer" to="/">
                        Gatwick Airport
                      </li>
                      <li className="nav-link-footer" to="/">
                        London City Airport
                      </li>
                      <li className="nav-link-footer" to="/">
                        Stansted Airport
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 footer_part_four_mobile">
                <div className="footerListThree">
                  <div className="footerListHeading">
                    <p>Contact Us</p>
                  </div>
                  <div className="footerListMenu">
                    <div className="IconNumberFooter">
                      <RiPhoneLine />
                      <div className="footerNumbers">
                        <a href="tel:01582 292929">01582 292929</a>
                        <a href="tel:+00441582 292929">+00441582 292929</a>
                      </div>
                    </div>
                    <div className="iconMail">
                      <TbMail />
                      <div className="footerMail">
                        <a href="mailto:Bookings@lutonairport.taxi">Bookings@lutonairport.taxi</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <CopyRight />
      </section>
    </>
  );
};

export default Footer;
