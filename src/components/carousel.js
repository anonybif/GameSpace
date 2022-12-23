import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import './Carousel.css';

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

function Carousel({ type, slides }) {
    const slider = React.useRef(null);

    const settings = {
        infinite: false,
        autoplay: false,
        arrows: true,
        prevArrow: < PreviousBtn />,
        nextArrow: <NextBtn />,
        autoplaySpeed: 5000,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    };

    return (
        <div className="carousel">
            <h2>{type}</h2>
            <Slider ref={slider} {...settings} className='deals-container'>
                {slides.map((card, index) => (
                    <div key={index} className='deals'>
                        <img alt={card.title} src={card.linkImg} className='game-img' />
                        <div className="slide-text">
                            <p className="title">{card.title}</p>
                            <p className="platform">{card.platform}</p>
                            <p className="price">{card.price}</p>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    );
}

export default Carousel;