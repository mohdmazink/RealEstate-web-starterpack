import React from "react";
import "./Residencies.css";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best choices</span>
          <span className="primaryText">Popular residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <sliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const sliderButtons = () => {
  const swipper = useSwiper();
  return (
    <div style={{backgroundColor:'red'}} className="r-button">
      <Button>&lt;</Button>
      <Button>&gt;</Button>
    </div>
  );
};
