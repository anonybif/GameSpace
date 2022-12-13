import React from "react";
import { latestContent } from "./data";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from "./Carousel";

function GameDeals() {
    return (
        <Carousel type='Game deals' slides={latestContent} />
    )
}

export default GameDeals;