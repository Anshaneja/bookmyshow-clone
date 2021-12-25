import React, { useContext } from 'react';
import {BiSearch , BiMenu, BiShareAlt} from 'react-icons/bi';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { GoTriangleDown} from 'react-icons/go';
import {MovieContext} from "../Context/movieContext";



function NavSm(){
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1 ">
                    <div className="text-xl text-white font-bold">It all Starts here!</div>
                    <div className="flex text-xs items-center gap-1 cursor-pointer text-gray-300 hover:text-white" >
                        Chandigarh <GoTriangleDown />
                    </div>
                </div>
                <div className="w-6 h-6">
                    <BiSearch className="text-gray-300 w-full h-full"/>
                </div>
            </div>
        </>
    )
}


function NavMd(props){
    const {movie} = useContext(MovieContext);
    
    if(props.path.startsWith('/movie')){
        return (
            <div className="flex justify-between w-full bg-white px-4 py-3 ">
                <div className="flex gap-3 px-2">
                    <RiArrowLeftSLine className="h-8 w-8"/>
                    <h1 className="text-xl font-bold">{movie.title}</h1> 
                </div>
                <div>
                    <BiShareAlt className="h-8 w-8"/>
                </div>
            </div>
        )
    }
    else{
    return ( 
        <div className="bg-black-700 px-4 py-3 w-full">
            <div className="flex items-center gap-3  rounded bg-white w-full px-3 py-1.5">
                        <BiSearch className="text-black-500"/>
                        <input type="search" placeholder="Search for Movies, Events, Plays, Sports and Activities" className=" border-none bg-transparent focus:outline-none w-full" />
                    </div>
        </div>
    )}
}

function NavLg(){
    return (
        <div className="flex flex-col w-full">
            <div className="flex items-center justify-between mx-3 w-full px-6 py-4">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="flex w-10 h-10">
                        <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full" />
                    </div>
                    <div className="flex items-center gap-3  rounded bg-white w-full px-3 py-1.5">
                        <BiSearch className="text-black-500"/>
                        <input type="search" id="search" placeholder="Search for Movies, Events, Plays, Sports and Activities" className=" border-none bg-transparent focus:outline-none w-full"  />
                    </div>
                </div>
                <div className="flex gap-5 items-center justify-end">
                    <span className="flex items-center gap-1 cursor-pointer text-gray-300 hover:text-white" >
                        Chandigarh <GoTriangleDown />
                    </span>
                    <button className="rounded bg-red-500 text-white px-4 py-1">Sign in</button>
                    <div className="w-8 h-8 ">
                        <BiMenu className="w-full h-full text-gray-300  cursor-pointer"/>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 text-white flex flex-row px-10 py-2.5 w-full">
                <div className="flex flex-row w-1/2 gap-1 justify-evenly">
                    <h5 className="text-gray-300 text-xs">Movies</h5>
                    <h5 className="text-gray-300 text-xs">Stream</h5>
                    <h5 className="text-gray-300 text-xs">Events</h5>
                    <h5 className="text-gray-300 text-xs">Play</h5>
                    <h5 className="text-gray-300 text-xs">Sport</h5>
                    <h5 className="text-gray-300 text-xs">Activities</h5>
                    <h5 className="text-gray-300 text-xs">Buzz</h5>
                </div>
                <div className="flex flex-row w-1/2 gap-3 justify-end">
                    <h5 className="text-gray-300 text-xs">ListYourShow</h5>
                    <h5 className="text-gray-300 text-xs">Corporate</h5>
                    <h5 className="text-gray-300 text-xs">Offers</h5>
                    <h5 className="text-gray-300 text-xs">Gift Cards</h5>
                </div>
            </div>
        </div>
        );
}


const Navbar = (props) => {
    return (
        <>
            <nav className="">
                <div className="md:hidden bg-black-700 px-4 py-3">
                    {/* Mobile Screen */}
                    <NavSm />
                </div>
                <div className="hidden md:flex lg:hidden">
                    {/* Medium/Tab Screen */}
                    <NavMd path={props.path} />
                </div>
                <div className="hidden w-full lg:flex bg-black-700 ">
                    {/* Large Screen */}
                    <NavLg />
                </div>

            </nav>
        </>
    );
};

export default Navbar;