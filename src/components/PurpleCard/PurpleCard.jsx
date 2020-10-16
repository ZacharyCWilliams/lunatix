import React from 'react';
import "./PurpleCard.scss";
import ViewAllBtn from "../../assets/blank-button.png"
import CardMaroon from "./CardMaroon";

export default function PurpleCard() {
  return (
    <section className='purple-container'>
      <div className="purple-buttons">
        <h2 className="trending-h2">Trending</h2>
        {/* need to add title to button  */}
        <img src={ViewAllBtn} alt="View All"/>
      </div>
      <div className="purple-cards">
        <CardMaroon title="Event 1" color="#690d3e" />
        <CardMaroon title="Event 2" color="#230414"  />
        <CardMaroon title="Event 3" color="#a34176"  />
        <CardMaroon title="Event 4" color="#ba7099"  />
      </div>
    </section>
  )
}