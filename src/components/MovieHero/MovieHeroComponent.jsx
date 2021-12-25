import React, { useContext , useState } from "react";
import { FaHeart } from "react-icons/fa"
import { MovieContext } from "../../Context/movieContext";
import PaymentModal from "../PaymentModal/Payment";

function MovieHeroComponent() {
    const {movie} = useContext(MovieContext);
    const movieDetails = {
        bgImageUrl : `https://images.tmdb.org/t/p/original${movie.backdrop_path}`,
        posterImage : `https://images.tmdb.org/t/p/original${movie.poster_path}`,
        movieName : movie.original_title,
        movieDescription : movie.tagline,
        genres: movie.genres?.map( ( {name} ) => name).join(", "),
        language : movie.original_language,
    };
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);
  
    const rentMovies = () => {
      setIsOpen(true);
      setPrice(149);
    };
  
    const buyMovie = () => {
      setIsOpen(true);
      setPrice(499);
    };
    return (
        <>
            <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            <div className="hidden lg:flex  w-full" style={{
            backgroundImage : "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%), url(" + movieDetails.bgImageUrl + ")" ,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            backgroundSize : "cover",
            height: "30rem"
            
            }}>
            <div className="h-full p-10 pl-32 ">
                <img src={movieDetails.posterImage} alt="Poster" className="w-full h-full rounded-xl"/>
            </div>
            <div className=" flex flex-col gap-5 py-10 text-gray-200 w-96" >
                <h1 className="text-4xl font-bold text-white">{movieDetails.movieName}</h1>
                <div className="flex gap-2">
                    <span><FaHeart className="text-red-500 inline-block  text-3xl"/></span>
                    <h1 className="font-bold text-2xl ">93%</h1>
                    <h1 className="text-lg mt-1">7.3k Ratings</h1>
                </div>
                <div className="flex justify-between bg-gray-800 p-1 rounded-xl shadow-md">
                    <div className="flex flex-col justify-center px-2 pl-3">
                        <h1 className="font-bold text-lg">Add your rating and review</h1>
                        <h1 className="text-md">Your ratings matter</h1>
                    </div>
                    <div className="p-3">
                        <button className="text-black-900 font-semibold border-2  bg-white rounded-lg py-1 px-2">Rate now</button>
                    </div>
                </div>
            
                <h1 className= "">English, Hindi, Kannada, Tamil, Telugu</h1>
                <h1 className= "">{movieDetails.genres}</h1>
                <div className="flex gap-3">
                    <button onClick={rentMovies} className="rounded-md bg-red-500 text-white text-lg px-6 py-2">Rent 149</button>
                    <button onClick={buyMovie} className="rounded-md bg-red-500 text-white text-lg px-6 py-2">Buy 499</button>
                </div>
            </div>
        </div> 
        <div className="flex flex-col lg:hidden w-full p-4 gap-3">

            <div className="w-full shadow-xl"> 
                <img 
                    src={movieDetails.bgImageUrl} 
                    className="w-full h-full rounded-xl"  
                    alt="Movie Hero"
                />
            </div>
            <div className="flex gap-2 pl-3 items-center">
                <span className="items-start"><FaHeart className="text-red-500 inline-block text-xl mb-1"/></span>
                <h1 className="font-bold text-lg ">93%</h1>
                <h1 className="text-sm mt-1">7.3k Ratings</h1>
                </div>
            <div className="flex justify-between bg-blue-100 p-2 md:p-3 rounded-xl shadow-md">
                <div className="flex flex-col justify-center pl-1.5 pr-0.5 md:px-3">
                    <h1 className="font-bold text-md md:text-lg">Add your rating and review</h1>
                    <h1 className="text-sm md:text-md">Your ratings matter</h1>
                </div>
                <div className="p-2 md:p-3">
                    <button className="text-sm md:text-lg text-red-500 font-semibold border-2 border-red-500 bg-red-50 rounded-lg py-1 px-2">Rate now</button>
                </div>
            </div>
            <h1 className="pl-2 text-md md:text-lg">{movieDetails.movieDescription}</h1>
            <div className="flex gap-3 pl-2">
                <button className="w-1/2 rounded-lg bg-red-500 text-white text-md md:text-lg px-6 py-2 shadow-xl">Rent 149</button>
                <button className="w-1/2 rounded-lg bg-red-500 text-white text-md md:text-lg px-6 py-2 shadow-xl">Buy 499</button>
            </div>

        </div>
        </>
    );
}

export default MovieHeroComponent;
