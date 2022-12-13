import React from "react";
import Banner from "../Banner";
import GameDeals from "../GameDeals";
import GiftCards from "../GiftCards";
import './Home.css';

function Home() {
    return (
        <div className="home">
            <Banner />
            <GameDeals />
            <GiftCards />
        </div>
    )
}

export default Home;