import React from "react";
import HeroSlider from 'react-slick';
import { useState , useEffect} from "react";
import axios from "axios";


import "./carousel.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroCarousel = () => {
    const [images, setImages] = useState([]);

    useEffect( () => {
        const requestNowPlaying = async() => {
            try{
                const getImages = await axios.get("/movie/now_playing");
                setImages(getImages.data.results);
            }
            catch(error){
                console.log(error);
            }
        }
        requestNowPlaying();
    }, []);
    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "100px",
        infinite: true,
        slideToScroll: 1,
        slidesToShow: 1,
        className : "react__slick__slider__parent",
    };

    const settings = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        className : 'react__slick__slider__parent',
    };

    return(
    <>
        <div className="lg:hidden">
            <HeroSlider {...settings}>
                {images.map( (image) => (
                    <div className="w-full h-56 md:h-80 py-3">
                        <img 
                            src= {`https://images.tmdb.org/t/p/original${image.backdrop_path}`}
                            alt="Hero Banner"
                            className="w-full h-full object-center"
                        />
                    </div>
                ))}
            </HeroSlider>
        </div>
        <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
                {images.map( (image,index) => (
                    <div key={`hero${index}`} className="w-full h-96  px-2 py-3" >
                        <img 
                            src= {`https://images.tmdb.org/t/p/original${image.backdrop_path}`}
                            alt="Hero Banner"
                            className="w-full h-full rounded object-center"
                        />
                    </div>
                ))}
            </HeroSlider>
        </div>
    </>)
}

export default HeroCarousel;