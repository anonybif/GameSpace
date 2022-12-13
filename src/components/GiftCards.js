import React from "react";
import { latestContent } from "./data";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from "./Carousel";

function GiftCards() {
    return (
        <Carousel type='Gift Cards' slides={latestContent} />
    )
}

export default GiftCards;