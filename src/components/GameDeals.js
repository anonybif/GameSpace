import React from "react";
import { products } from "../data/product_data";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from "./Carousel";

function GameDeals() {
    const games = products.filter(product => {
        return product.category === 'Game';
    })
    return (
        <Carousel type='Game deals' slides={games} />
    )
}

export default GameDeals;