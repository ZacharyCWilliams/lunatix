import React from 'react';
import "./VideoSection.scss";
import DriveInConcert from "../../assets/drive-in-concert.png";
import LearnMore from "../../assets/learn-more-btn.png"

export default function VideoSection() {
  return (
    <section className="video-section-container">
      <img src={DriveInConcert} alt="drive-in-concert" className="drive-in-image" />
      <button className="learn-more-button">
        <img src={LearnMore} alt="learn-more"/>
      </button>
    </section>
  )
}
