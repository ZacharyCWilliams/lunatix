import React from "react";
import "./Banner.scss";
import BannerImage from "../../assets/banner.jpg";
import SearchInput from "../../assets/search-bar.png";

export default function Banner() {
  return (
    <section className="banner-section">
      <div className="banner-input">
        <h2 className="banner-title">Magnanimus Tour</h2>
        <img src={SearchInput} alt="search-input-icon" className="search-bar-icon" />
      </div>
      <img src={BannerImage} alt="banner" className="banner-background" />
    </section>
  );
}