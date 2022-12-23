import React from "react";
import { products } from "../data/product_data";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from "./Carousel";

function GiftCards() {
    const giftCards = products.filter(product => {
        return product.category === 'GiftCard';
    })
    return (
        <Carousel type='Gift Cards' slides={giftCards} />
    )
}

export default GiftCards;