import React, { useEffect } from "react";
import "../assets/css/style.css";
import downArr from "../assets/images/down-arr.svg";

export default function HomeCover() {
  return (
    <div className="home-cover" data-aos="fade-up">
      <div className="circle-container" data-aos="fade-up">
        <div className="circle yel" id="circle-main"></div>
      </div>
      <span className="heading wt" data-aos="fade-up">
        PRADEEP
      </span>
      <span className="sub-heading wt" data-aos="fade-up">
        Software Developer, Front end and Backend Developer
      </span>
      <img
        src={downArr}
        style={{ position: "relative", top: 110, cursor: "pointer" }}
        alt="svg"
        data-aos="fade-up"
      />
    </div>
  );
}
