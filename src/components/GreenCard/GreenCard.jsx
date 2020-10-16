import React from 'react';
import "./GreenCard.scss";
import Card from "./Card";

export default function GreenCard() {
  return (
    <section className="green-card-section">
       <Card title="CATEGORY 1" color="#1f991c" />
       <Card title="CATEGORY 2" color="#76b501" />
       <Card title="CATEGORY 3" color="#669908" />
       <Card title="CATEGORY 4" color="#84ad37" />
       <Card title="CATEGORY 5" color="#4bac4a" />
       <Card title="CATEGORY 6" color="#78c275" />
    </section>
  )
}
