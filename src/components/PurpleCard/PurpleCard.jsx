import React from 'react';
import "./PurpleCard.scss";
import CardMaroon from "./CardMaroon";

export default function PurpleCard() {
  return (
    <section className='purple-container'>
      <div className="purple-buttons">
        <h2 className="trending-h2">TRENDING</h2>
        <button className="view-all-btn">
          View All
        </button>
      </div>
      <div className="purple-cards">
        <CardMaroon title="EVENT 1" color="#690d3e" />
        <CardMaroon title="EVENT 2" color="#230414"  />
        <CardMaroon title="EVENT 3" color="#a34176"  />
        <CardMaroon title="EVENT 4" color="#ba7099"  />
      </div>
    </section>
  )
}