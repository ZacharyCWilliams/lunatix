import React, { useState, useEffect } from 'react'
import "./FootballSchedule.scss";
import Slider from "../../assets/slider-range.png";


export default function FootballSchedule() {

  const [games, setGames] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(16);

  let settings = { 
    "async": true,
    "crossDomain": true,
    "url": "https://free-nba.p.rapidapi.com/teams?page=0", 
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
      "x-rapidapi-key": "e5d8563997mshcfb030c802400d3p1ec262jsn6864acf2d34a"
    } 
  }

const loadGames = async() => {
  await fetch("https://free-nba.p.rapidapi.com/teams?page=0", settings)
  .then(res => res.json()).then(data => setGames(data))
  .catch(err => console.log(err))
}

  useEffect(() => {
    loadGames();
  }, []);
  
  let schedule;
  if (games) {
    const lastGameIdx = currentPage * gamesPerPage
    const firstGameIdx = lastGameIdx - gamesPerPage
    const currentGames = games.data.slice(firstGameIdx, lastGameIdx)
    schedule = currentGames.map(game => {
    return (
      <li className="game-li">
        <h2 className="game-name">
          {game.full_name}
        </h2>
        <div className="game-price-section">
          <p className="game-price">from:</p>
          <p className="game-price-number">${Math.floor(Math.random() * 200)}</p> 
        </div>
      </li>
    )
  })
  }


  
  console.log(games)

  return (
    <section className="football-container">
      {/* <section className="football-schedule-filters">
        
      </section> */}
      <section className="football-schedule">
        <div className="fb-buttons-section">
          <button className="filter-btn">By Team</button>
          <button className="filter-btn">By Game</button>
          <img className="filter-slider" src={Slider} alt="slider"/>
        </div>
        <div className="bottom-container-football-schedule">
          <div className="football-section-div">{schedule}</div>
          <section className="placeholder-ad">
            <h2 className="placeholder-h2-football-section">PLACEHOLDER FOR PROMOTIONAL MESESAGING</h2>
          </section>
        </div>
      </section>
    </section>
  )
}
