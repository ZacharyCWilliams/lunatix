import React from 'react';
// import GreenCard from "../../assets/green-card.png";
import "./GreenCard.scss";

export default function Card({ title, color }) {
  return (
    <div className="green-section-card" style={{ backgroundColor: color }}>
      <h2 className="green-section-card-h2">{title}</h2>
      {/* <img src={GreenCard} alt={title} className="green-section-card" /> */}
    </div>
  )
}
