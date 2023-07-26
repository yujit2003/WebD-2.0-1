import React, { Component } from 'react'
import "../../assets/css/HomeHero.css";
import Logo from "../../assets/images/emr_logo_white.png";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import $ from 'jquery';
import Robot from "../../assets/images/robot.png"

const HomeHero = () =>{
            return (
                <>
                
            <div className="home_container">
                <div className="home_header">
                    <img src={Logo} alt="EMR_LOGO" />
                </div>

                    
                <div className="home_content">
                    <div className="home_content_1">
                        E
                    </div>
                    <div className="home_content_2">
                        M
                    </div>
                    <div className="home_content_1">
                        R
                    </div>

                    
                </div>
                <div className="bot">
                    <img src={Robot} alt="EMR_LOGO" />
                </div>
                <div className="home_heading">
                    Embedded System and Robotics Club
                </div>
                <div className="home_heading">
                    NIT Kurukshetra
                </div>
                <br />
                <div className="home_heading-2">
                    Vision "Engineering Education should orient towards Innovation"
                </div>
                <div className="home_button">
                    <button><ArrowDownwardIcon /></button>
                </div>

            </div>
        </>
    )
}

export default HomeHero;
