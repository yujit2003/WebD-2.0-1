import "../../assets/css/UpcomingWorkshop.css";
import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import pic1 from "../../assets/images/WorkshopSlider.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [pic1, pic1, pic1, pic1, pic1];

const UpcomingWorkshops = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imgIndex, setImgIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 150,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_current, next) => setImgIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={idx} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UpcomingWorkshops;
