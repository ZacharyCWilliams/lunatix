import React from 'react'
import "./PurpleCard.scss";

export default function CardMaroon({ title, color }) {
  return (
    <div className="purple-section-card" style={{ backgroundColor: color }}>
      <h2 className="purple-section-card-h2">{title}</h2>
    </div>
  )
}