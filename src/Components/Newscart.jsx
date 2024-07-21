import React, { useState } from "react";
import "./newscart.css";

const Newscart = ({ imageUrl }) => {
  return (
    <>
      <div className="NewsCart-Section">
        <div
          className="backGround-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <p>Breaking News</p>
      </div>
      
    </>
  );
};

export default Newscart;
