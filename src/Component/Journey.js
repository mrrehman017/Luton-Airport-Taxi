import React from "react";
import JourneyCards from "./JourneyCards";
import "./style.css";

export const Journey = () => {
  return (
    <>
      <section id="journey">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="journey_section_heading">
                <p>
                  Let us take care of <span>your journey</span>
                </p>
              </div>
            </div>
          </div>
          <JourneyCards />
        </div>
      </section>
    </>
  );
};

export default Journey;
