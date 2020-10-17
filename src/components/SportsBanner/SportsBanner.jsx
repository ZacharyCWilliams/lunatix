import React from "react";
import "./SportsBanner.scss";
import SportsBannerImage from "../../assets/sports-banner-pic.jpg";
import SearchInput from "../../assets/search-bar.png";

export default function Banner() {
  return (
    <section className="sports-banner-section">
      <div className="sports-banner-input">
        <h2 className="sports-banner-title">NFL</h2>
        <img src={SearchInput} alt="search-input-icon" className="sports-search-bar-icon" />
      </div>
      <img src={SportsBannerImage} alt="banner" className="sports-banner-background" />
    </section>
  );
}