import React from "react";
import "../../styles/Home.css"
import hand from "../../assets/hand.png";
import { RiMailSendFill } from "react-icons/ri";

function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title handy">
        Hanz StillFaith  <img src={hand} alt="" className="hand" />{" "}
      </h1>
      <h3 className="home__subtitle">Video Editor/Graphic Designer</h3>
      <p className="home__description">
      I'm a Video Editor, Helping Businesses and Content Creators to ENGAGE their AUDIENCE with STUNNING VIDEOS not only Capture attention but turn Viewers into Loyal Customers.
      </p>
      <div className="home__description">"UNLOCK THE POWER OF VIDEO MARKETING: More Leads, More Sales, More Growth!"
        </div>
      <a href="#contacts" className=" hello button--flex">
        Hello <RiMailSendFill className="icon__hello" />
      </a>
    </div>
  );
}

export default Data;
