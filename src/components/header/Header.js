import React from "react";
import "nes.css/css/nes.min.css";
import "./header.css";

import coin from "../../images/coin.png";
import chicken from "../../images/chicken.png";
import crab from "../../images/crab.png";
import cloud from "../../images/cloud.png";
import cake from "../../images/cake.png";

import bread from "../../images/bread.png";
import burger from "../../images/burger.png";
import cheess from "../../images/cheess.png";
import crackheart from "../../images/cracked_heart.png";
function Header() {
  return (
    <div className="h">
      <div className="h-left">
        <i class="nes-icon facebook is-medium"></i>
        {/* <input type="text" id="name_field" className="h-left-input" size="15" /> */}
      </div>
      <div className="h-center">
        <div className="h-center-option nes-btn">
          {/* <GiBeehive className="h-center-icon" /> */}
          <img src={cake} alt="" className="h-center-icon " />
        </div>
        <div className="h-center-option nes-btn">
          {/* <GiBearFace className="h-center-icon" /> */}
          <img src={coin} alt="" className="h-center-icon" />
        </div>
        <div className="h-center-option nes-btn">
          {/* <GiBeerBottle className="h-center-icon" /> */}
          <img src={chicken} alt="" className="h-center-icon" />
        </div>
        <div className="h-center-option nes-btn">
          <img src={crab} alt="" className="h-center-icon" />

          {/* <GiBrickWall className="h-center-icon" /> */}
        </div>
        <div className="h-center-option nes-btn">
          <img src={cloud} alt="" className="h-center-icon" />

          {/* <GiDoctorFace className="h-center-icon" /> */}
        </div>
      </div>
      <div className="h-right">
        <div className="h-username">Quoc Nam</div>
        <div className="h-right-option">
          <img src={bread} alt="" className="h-right-icon" />
        </div>
        <div className="h-right-option">
          <img src={burger} alt="" className="h-right-icon" />
        </div>
        <div className="h-right-option">
          <img src={cheess} alt="" className="h-right-icon" />
        </div>
        <div className="h-right-option">
          <img src={crackheart} alt="" className="h-right-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;