import React, { useState } from "react";
import "./LogoMaker.scss";

export default function LogoMaker() {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  var imgSrc = "./img/LogoMaker/makerlogo-large.png";

  if (window.innerWidth < 901) {
    imgSrc = "./img/LogoMaker/makerlogo-medium.webp";
  }
  if (window.innerWidth < 601) {
    imgSrc = "./img/LogoMaker/makerlogo-small.webp";
  }

  return (
    <section id="logoMaker">
      <div className="my-container">
        <div className="logoMaker-left">
          <h1>airbnb <span>logo maker</span></h1>
          <h2>Make an incredible logo</h2>
          <h3>in minutes</h3>
          <h4>Pre-designed by top talent. Just add your touch.</h4>
          <button>Try airbnb Logo Maker</button>
        </div>
        <div className="logoMaker-right">
          <img src={imgSrc} alt="logoMakerImg" />
        </div>
      </div>
    </section>
  );
}
