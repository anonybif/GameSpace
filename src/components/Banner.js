import React from "react";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { latestContent } from "./data";
import './Banner.css'

function Banner() {

    return (
        <div className="banner-container">
            <div className='banner'>
                <div className='banner-text'>
                    <div className="tag">
                        <p>{'3/11/19'}</p>
                        <p>{'RELEASE REVIEW'}</p>
                    </div>
                    <h1>{'Game Review: Skytar Wins In Storytelling'}</h1>
                    <button className='btn btn--secondary btn--large'>Read More</button>
                </div>
                <img alt={'card.title'} src={'assets/images/image-00.jpeg'} className='banner-img' />
            </div>
        </div>
    );

}

export default Banner;
