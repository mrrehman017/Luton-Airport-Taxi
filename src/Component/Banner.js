import React from "react";
import GooglePlay from "../assets/Images/Group 14.png";
import AppleIcon from "../assets/Images/Group 15 (3).jpg";
import PayPal from "../assets/Images/Group 17.jpg";
import VISACard from "../assets/Images/Group 18.jpg";
import StripeCard from "../assets/Images/Group 13.jpg";
import ExpressCard from "../assets/Images/Group 16.jpg";
import PlaneElement from '../assets/Images/Plane Element.jpg'
import '../Component/style.css'
import BannerTab from './BannarTab'


export const Banner = () => {
  return (
    <>
      <section className="heder_title_Section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="branTitleMain d-flex justify-content-between">
                <div className="brandTitle">
                  <span>Luton Airport</span>
                  <p>
                    Hassle Free <br />
                    Transfer Service.
                  </p>
                </div>
                <img src={PlaneElement} alt=""/>
              </div>
              
              <div className="brandofer">
                <p>
                  Save up to <span> 40% </span> by pre booking your journey{" "}
                </p>
              </div>
              <div className="bankCard">
                <a href="/">
                  {" "}
                  <img src={GooglePlay} alt="GooglePlay" />{" "}
                </a>
                <span>&nbsp;|&nbsp;</span>
                <a href="/">
                  {" "}
                  <img src={AppleIcon} alt="GooglePlay" />{" "}
                </a>
                <span>&nbsp;|&nbsp;</span>
                <a href="/">
                  {" "}
                  <img src={PayPal} alt="GooglePlay" />{" "}
                </a>
                <span>&nbsp;|&nbsp;</span>
                <a href="/">
                  {" "}
                  <img src={VISACard} alt="GooglePlay" />{" "}
                </a>
                <span>&nbsp;|&nbsp;</span>
                <a href="/">
                  {" "}
                  <img src={StripeCard} alt="GooglePlay" />{" "}
                </a>
                <span>&nbsp;|&nbsp;</span>
                <a href="/">
                  {" "}
                  <img src={ExpressCard} alt="GooglePlay" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bookingForm">
                <div className="TabHeader">
                  <BannerTab/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
