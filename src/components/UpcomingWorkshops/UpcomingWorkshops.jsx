import "../../assets/css/UpcomingWorkshop.css";
import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import pic1 from "../../assets/images/home_bg.gif";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ReactTyped from "react-typed";

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
    speed: 50,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_current, next) => setImgIndex(next),
  };

  return (
    <div className="upcoming_workshop_block">
      <p className="upcoming_workshop_text">
        Upcoming <ReactTyped strings={["Workshops"]} typeSpeed={100} loop />
      </p>

      <div className="slider_block">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={idx} />
            </div>
          ))}
        </Slider>
      </div>
      <button class="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
        Apply Now
      </button>
    </div>
  );
};

export default UpcomingWorkshops;
