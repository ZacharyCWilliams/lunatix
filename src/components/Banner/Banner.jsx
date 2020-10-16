import React from "react";
import "./Banner.scss";
import BannerImage from "../../assets/banner.jpg"

export default function Banner() {
  return (
    <section className="banner-section">
      <div className="banner-input">
        {/* <h2 className="banner-title">Magnanimus Tour</h2>
        <input type="text"/> */}
      </div>
      <img src={BannerImage} alt="banner" className="banner-background" />
    </section>
  );
}