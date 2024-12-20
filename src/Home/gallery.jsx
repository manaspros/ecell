import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: "ondemand",
        arrows: false, // Disable arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src="/Gallery/10.jpg" alt="Image 1" style={{ width: "100%", height: "auto" }} />
                </div>
                <div>
                    <img src="/Gallery/15.JPG" alt="Image 2" style={{ width: "100%", height: "auto" }} />
                </div>
                <div>
                    <img src="/Gallery/16.JPG" alt="Image 3" style={{ width: "100%", height: "auto" }} />
                </div>
                <div>
                    <img src="/Gallery/17.JPG" alt="Image 4" style={{ width: "100%", height: "auto" }} />
                </div>
                <div>
                    <img src="/Gallery/8.jpg" alt="Image 5" style={{ width: "100%", height: "auto" }} />
                </div>
                <div>
                    <img src="/Gallery/3.jpg" alt="Image 6" style={{ width: "100%", height: "auto" }} />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
