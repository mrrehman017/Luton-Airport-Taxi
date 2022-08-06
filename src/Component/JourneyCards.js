import React from "react";
import JourneyCardsDatas from "./JurneyCardData";


export const JourneyCards = () => {

  const JourneyCardsList = JourneyCardsDatas.map((JourneyCardsData) => {

      const {id, title, describetion, image} = JourneyCardsData;

      return(

        <div className="col-lg-3 col-md-4 col-sm-6 mb-5" key={id}>
            <div className="cardMain">
                <div className="cardMainBody">
                    <div className="cardImage">
                        <img src={image} alt="" />
                    </div>
                    <div className="cardTitle">
                        <p>{title}</p>
                    </div>
                    <div className="cardDescription">
                        <p>{describetion}</p>
                    </div>
                </div>
            </div>
        </div>

      )
  })


  return (
    <>
        <div className="row justify-content-center">
            {JourneyCardsList}
        </div>
    </>
  );
};

export default JourneyCards