import React from "react";
import Article from "../Article";
import Banner from "../Banner";
import GameDeals from "../GameDeals";
import GiftCards from "../GiftCards";
import UpcomingGames from "../UpcomingGames";
import './Home.css';

function Home() {
    return (
        <div className="home">
            <Banner />
            <GameDeals />
            <GiftCards />
            <div className="blog-section">
                <Article className="articlehome" />
                <UpcomingGames className="upcomingGames" />
            </div>
        </div>
    )
}

export default Home;