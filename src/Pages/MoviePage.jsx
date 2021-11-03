import React, { useContext, useEffect, useState } from "react";
import MovieHeroComponent from "../components/MovieHero/MovieHeroComponent";
import { MdLocalMovies } from "react-icons/md";
import {FaCcVisa} from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSliderComponent";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import {MovieContext} from "../Context/movieContext";
import axios from "axios";
//css 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MoviePage() {

    const { id } =useParams();
    const { movie, setMovie } = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    useEffect( ()=> {
        const requestMovie = async() => {
            const getMovie = await axios.get(`/movie/${id}`);
            setMovie(getMovie.data)
        }
        requestMovie();
        
    },[id,setMovie]);
    useEffect( ()=>{
        const requestCast = async() => {
            const getCast = await axios.get(`/movie/${id}/credits`)
            setCast(getCast.data.cast);
        }
        requestCast();
    },[id])

    const [SimilarMovies, setSimilarMovies] = useState([]);
    const [TopRatedMovies, setTopRatedMovies] = useState([]);

    useEffect( () => {
        const requestSimilarMovies = async() => {
            try{
                const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
                setSimilarMovies(getSimilarMovies.data.results);
            }
            catch(error){
                console.log(error);
            }
        }
        requestSimilarMovies();
    }, [id]);

    useEffect( () => {
        const requestTopRatedMovies = async() => {
            try{
                const getTopRatedMovies = await axios.get("/movie/top_rated");
                setTopRatedMovies(getTopRatedMovies.data.results);
            }
            catch(error){
                console.log(error);
            }
        }
        requestTopRatedMovies();
    }, [id]);


    const settings = {
        arrows : true,
        autoplay : false,
        infinite : false,
        slidesToShow : 5,
        slidesToScroll : 4,
        InitialSlide : 0,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
        ]
    };

    const CastCard = (props) => {
        return (
            <div className="flex flex-col items-center">
                <div className="h-24 w-24  md:h-32 md:w-32 ">
                    <img src= {props.profilePic} alt="Cast Profile Pic" className=" h-full w-full rounded-full" />
                </div>
                <h1 className=" text-sm md:text-md text-center">{props.name}</h1>
                <h1 className=" text-xs md:text-sm text-gray-500 text-center mx-2" >{`as ${props.role}`}</h1>
                
            </div>
        )
    }

    return(
        <div>
            <MovieHeroComponent />
            <div className="flex flex-col gap-8 md:gap-14 w-full lg:w-3/4 py-5 px-8 lg:py-10 lg:px-16">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-black-800 ">About the movie</h1>
                    <p className="pt-3 text-sm md:text-md text-gray-800">
                        {movie.overview}
                    </p>
                </div>
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-black-800">Applicable offers</h1>
                    <div className="flex flex-col lg:flex-row mt-4 gap-3">
                        <div className="flex w-full lg:w-1/2  border-dashed border-yellow-400 border-2 bg-yellow-100 py-2 px-4 ">
                            <MdLocalMovies alt="Filmy pass icon" className="h-8 w-8"/>
                            <div className="pl-2">
                                <h1 className=" text-md md:text-xl font-bold text-black-800 ">Filmy Pass</h1>
                                <p  className="pt-1 text-xs md:text-md text-gray-800">Get 50% off up to INR 150 on all RuPay card* on BookMyShow Stream.</p>
                            </div>
                        </div>
                        <div className="flex w-full lg:w-1/2  border-dashed border-yellow-400 border-2 bg-yellow-100 py-2 px-4 ">
                            <FaCcVisa alt="Visa icon" className="h-8 w-8"/>
                            <div className="pl-2">
                                <h1 className="text-md md:text-xl font-bold text-black-800 ">Visa Stream Offer</h1>
                                <p  className="pt-1 text-xs md:text-md text-gray-800">Get 50% off up to INR 150 on all RuPay card* on BookMyShow Stream.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-black-800 ">Cast and Crew</h1>
                    <Slider {...settings} className="mt-5 flex justify-start">
                        {cast.map( (castInfo) => (
                            <CastCard 
                                profilePic = {`https://images.tmdb.org/t/p/original${castInfo.profile_path}`}
                                name = {castInfo.original_name}
                                role = {castInfo.character}
                            />
                        ))}
                    </Slider>
                </div>
                <PosterSlider 
                    title= "Similar Movies"
                    PosterDetails = {SimilarMovies}
                    isdark = {false} 
                />
                <PosterSlider 
                    title= "BMS XCLUSIVE"
                    PosterDetails = {TopRatedMovies}
                    isdark = {false} 
                />
            </div>
        </div>

    );
}

export default MoviePage;