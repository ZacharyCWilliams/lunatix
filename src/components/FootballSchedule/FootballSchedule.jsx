import React, { useState, useEffect } from 'react'
import "./FootballSchedule.scss";

export default function FootballSchedule() {

  const [games, setGames] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

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
    schedule = games.data.map(game => {
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

  // const lastGameIdx = currentGame * gamesPerPage
  // const firstGameIdx = indexOfLastGame - gamesPerPage
  // const currentGames = games.slice(firstGameIdx, lastGameIdx)
  
  console.log(games)

  return (
    <section className="football-container">
      <section>
        {schedule}
      </section>
      <section className="placeholder-ad">
      
      </section>
    </section>
  )
}
