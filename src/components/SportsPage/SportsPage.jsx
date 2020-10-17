import React from 'react'
import NavBar from "../NavBar/NavBar";
import SportsBanner from "../SportsBanner/SportsBanner";
import Footer from "../Footer/Footer";
import FootballSchedule from "../FootballSchedule/FootballSchedule";

export default function SportsPage() {
    return (
      <>
        <NavBar />
        <SportsBanner />
        <FootballSchedule />
        <Footer />
      </>
    )
}

