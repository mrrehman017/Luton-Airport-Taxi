import React from "react";
import Driver from "../assets/Images/driver.png";
import texi from "../assets/Images/texi.png";
import cars from "../assets/Images/cars.png";

import { RiArrowRightUpLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

export const NewsArtical = () => {
  return (
    <>
      <section className="NewsArticalSEction" id="NewsSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newsHeading">
                <p>
                  News <span>And</span> Articles
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="newsMain">
                <div className="newsMain_body">
                  <div className="newsImag">
                    <img src={Driver} alt="" />
                  </div>
                  <div className="dateAndAdminNew">
                    <p>
                      <span>By: Admin</span> Category: Driving
                    </p>
                    <span>12/03/22</span>
                  </div>
                  <div className="NewDriverName">
                    <p>Taxi From Luton</p>
                  </div>
                  <div className="newsDescription">
                    <p>
                      Lorem ipsum dolor amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                    </p>
                  </div>
                  <div className="readmoreNews">
                    <button>
                      Read More <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="newsMain">
                <div className="newsMain_body">
                  <div className="newsImag">
                    <img src={texi} alt="" />
                  </div>
                  <div className="dateAndAdminNew">
                    <p>
                      <span>By: Admin</span> Category: Driving
                    </p>
                    <span>12/03/22</span>
                  </div>
                  <div className="NewDriverName">
                    <p>Taxi From Luton</p>
                  </div>
                  <div className="newsDescription">
                    <p>
                      Lorem ipsum dolor amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                    </p>
                  </div>
                  <div className="readmoreNews">
                    <button>
                      Read More <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="newsMain">
                <div className="newsMain_body">
                  <div className="newsImag">
                    <img src={cars} alt="" />
                  </div>
                  <div className="dateAndAdminNew">
                    <p>
                      <span>By: Admin</span> Category: Driving
                    </p>
                    <span>12/03/22</span>
                  </div>
                  <div className="NewDriverName">
                    <p>Taxi From Luton</p>
                  </div>
                  <div className="newsDescription">
                    <p>
                      Lorem ipsum dolor amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                    </p>
                  </div>
                  <div className="readmoreNews">
                    <button>
                      Read More <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="viewALLbtn">
                <button className="btn">
                  View All <RiArrowRightUpLine />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsArtical;
