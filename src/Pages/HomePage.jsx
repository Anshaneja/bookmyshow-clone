
import React, {useState, useEffect} from "react";
import HeroCarousel from "../components/HeroCarousel/HeroCarouselComponent";
import EntertainmentCardSlider from "../components/EntertainmentCard/EntertainmentCardComponent";
import PosterSlider from "../components/PosterSlider/PosterSliderComponent";
import axios from "axios";

function HomePage(){

    
    const [UpcomingMovies, setUpcomingMovies] = useState([]);
    const [PopularMovies, setPopularMovies] = useState([]);
    const [TopRatedMovies, setTopRatedMovies] = useState([]);

    useEffect( () => {
        const requestPopularMovies = async() => {
            try{
                const getPopularMovies = await axios.get("/movie/popular");
                setPopularMovies(getPopularMovies.data.results);
            }
            catch(error){
                console.log(error);
            }
        }
        requestPopularMovies();
    }, []);

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
    }, []);

    useEffect( () => {
        const requestUpcomingMovies = async() => {
            try{
                const getUpcomingMovies = await axios.get("/movie/upcoming");
                setUpcomingMovies(getUpcomingMovies.data.results);
            }
            catch(error){
                console.log(error);
            }
        }
        requestUpcomingMovies();
    }, []);



    return (
      <>
      <div>
        <HeroCarousel />
        <PosterSlider 
            title= "Popular Movies"
            PosterDetails = {PopularMovies}
            isdark = {false} 
            className="pl-5 md:pl-8 lg:pl-11 pt-3 md:pt-6 lg:pt-10 "
        />
        <EntertainmentCardSlider />
        <PosterSlider 
            title= "Top Rated Movies"
            PosterDetails = {TopRatedMovies}
            isdark = {true}
            className="mt-4 md:mt-12 lg:mt-20 pl-5 md:pl-8 lg:pl-11 "
            elements = {<img className="w-full h-30 mb-10" alt="Premiere" src ="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" />} 
        />
        <PosterSlider 
            title= "Upcoming Movies"
            PosterDetails = {UpcomingMovies}
            isdark = {false}
            className="pl-5 md:pl-8 lg:pl-11 pt-3 md:pt-6 lg:pt-10 "  
        />
        
      </div>
      </>
    );
}

export default HomePage;