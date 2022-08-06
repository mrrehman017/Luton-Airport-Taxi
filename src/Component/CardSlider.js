import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import CardApi from "./CardApi";
import Rating from '@mui/material/Rating';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
// import { RiArrowRightUpLine } from "react-icons/ri";
// import required modules
import {Navigation } from "swiper";

export function CardSlider() {
  const ListCardItem = CardApi.map((carditem) => {
    const { id, image, name, title, detail, rating} = carditem;

    return (
        <SwiperSlide  key={id}>
        <div className="card">
          <div className="cardImg">
            <img src={image} alt="" />
          </div>
          <div className="cardName">
            <p>{name}</p>
          </div>
          <div className="cardContent">
            <p>{title}</p>
          </div>
          <div className="cardrating">
          <Rating name="read-only" value={rating} readOnly />
          </div>
          <div className="cardDetails">
            <p>
              {detail}
            </p>
          </div>
      </div>
      </SwiperSlide>
    );
  });
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        breakpoints={{
          1199: {
            // width: 576,
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
          991 : {
            slidesPerView: 2,
          },
          768 : {
            slidesPerView: 2,
          },
          600 : {
            slidesPerView: 1,
          },
          320 : {
            slidesPerView: 1,
          },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
            {ListCardItem}
      </Swiper>
      
    </>
  );
}

export default CardSlider;
