import React, { Component } from "react";
import "../assets/css/HomeHero.css";
import Logo from "../assets/images/emr_logo_white.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import $ from "jquery";
import Robot from "../assets/images/robot.png";

export default class App extends Component {
  // eye jquery
  componentDidMount() {
    $(".home_container").mousemove(function (event) {
      var eye = $(".eye");
      var x = eye.offset().left + eye.width() / 2;
      var y = eye.offset().top + eye.height() / 2;
      var rad = Math.atan2(event.pageX - x, event.pageY - y);
      var rot = rad * (180 / Math.PI) * -1 + 180;
      eye.css({
        "-webkit-transform": "rotate(" + rot + "deg)",
        "-moz-transform": "rotate(" + rot + "deg)",
        "-ms-transform": "rotate(" + rot + "deg)",
        transform: "rotate(" + rot + "deg)",
      });
    });
  }
  render() {
    return (
      <>
        <div className="home_container">
          <div className="home_header">
            <img src={Logo} alt="EMR_LOGO" />
          </div>

          <div className="home_content">
            <div className="home_content_1">E</div>
            <div className="home_content_2">M</div>
            <div className="home_content_1">R</div>
          </div>
          <div class="container">
            <div class="eye"></div>
            <div class="eye"></div>
          </div>
          <div className="bot">
            <img src={Robot} alt="EMR_LOGO" />
          </div>
          <div className="home_heading">Embedded System and Robotics Club</div>
          <div className="home_heading">NIT Kurukshetra</div>
          <br />
          <div className="home_heading-2">
            Vision "Engineering Education should orient towards Innovation"
          </div>
          <div className="home_button animate-bounce">
            <button>
              <ArrowDownwardIcon />
            </button>
          </div>
        </div>
      </>
    );
  }
}
