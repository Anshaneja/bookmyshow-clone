import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./carousel.css"

function PosterCard(props) {
    let textColor;
    if(props.isdark){
        textColor = "text-white";
    }
    else{
        textColor = "text-black-700";
    }
    return(
        <Link to={`/movie/${props.posterDetails.id}`}>
            <div className="px-2">
                <div className="h-40 lg:h-90 w-auto pb-2">
                    <img src={`https://images.tmdb.org/t/p/original${props.posterDetails.poster_path}`} alt="Poster" className="w-full h-full "/>
                </div>
                <h1 className={`text-md md:text-xl font-semibold pl-2  ${textColor}`}>{props.posterDetails.title}</h1>
            </div>
        </Link>
    );
}
function PosterSlider(props) {


    const settings = {
        arrows : true,
        autoplay : false,
        infinite : false,
        slidesToShow : 5,
        slidesToScroll : 4,
        InitialSlide : 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 0,
                infinite : true,
                arrows : false,
              }
            },
        ]
    };
    
    const dark = {
        bgColor : "bg-black-800",
        textColor : "text-white"
    }

    const light = {
        bgColor : "",
        textColor : "text-black-700"
    }
    let theme;
    if(props.isdark){
        theme = dark;
    }
    else {
        theme = light;
    }
    return(
        <>
            <div className= {`flex flex-col justify-center lg:pb-5 md:pl-8 lg:pl-11 pt-3 md:pt-6 lg:pt-10  ${theme.bgColor} ${props.className} `}>
                {props.elements}
                <h1 className={`pl-5 text-xl md:text-2xl lg:text-3xl font-bold  ${theme.textColor}`}>{props.title}</h1>
                <Slider {...settings} className="p-3 slick_poster_slider">
                        {props.PosterDetails.map( (poster,index) => (
                            <div>
                                <PosterCard posterDetails ={poster} isdark = {props.isdark}  key={`Poster${index}`}/> 
                            </div>
                        ))}
                </Slider>
            </div>
        </>
    );


}
export default PosterSlider;


