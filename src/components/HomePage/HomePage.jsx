import React from 'react'
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import GreenCard from "../GreenCard/GreenCard";
import PurpleCard from "../PurpleCard/PurpleCard";
import VideoSection from "../VideoSection/VideoSection";
import Footer from "../Footer/Footer";

export default function HomePage() {
    return (
      <section className="home-page-container">
        <NavBar />
        <Banner />
        <GreenCard />
        <PurpleCard />
        <VideoSection />
        <Footer />
      </section>
    );
}
