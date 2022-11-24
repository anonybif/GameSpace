import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { latestContent } from "./data";
import './carousel.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos className="slide-icons" />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos className="slide-icons" />
        </div>
    );
};

function Carousel() {

    const slider = React.useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: true,
        prevArrow: < PreviousBtn />,
        nextArrow: <NextBtn />,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,


    };

    return (
        <div className="carousel">

            {/* <h2> Latest</h2> */}
            <Slider ref={slider} {...settings} >
                {latestContent.map((card, index) => (
                    <div key={index} className='main-slider'>
                        <img alt={card.title} src={card.linkImg} className='card-img' />
                        {/* <div className="slide-text">
                                <h2>{card.title}</h2>
                                <p>{card.price}</p>
                                <p>{card.category}</p>
                            </div> */}
                        {/* <button className='btn'>Buy Now</button> */}
                    </div>
                ))}
            </Slider>
        </div>
    );

}

export default Carousel;
