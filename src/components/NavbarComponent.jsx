import React from 'react';
import {BiSearch , BiMenu} from 'react-icons/bi';
import { GoTriangleDown} from 'react-icons/go';

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

function NavMd(){
    return (
        <>
            <div class="flex items-center gap-3  rounded bg-white w-full px-3 py-1.5">
                        <BiSearch className="text-black-500"/>
                        <input type="search" placeholder="Search for Movies" className=" border-none bg-transparent focus:outline-none w-full" />
                    </div>
        </>
    )
}

function NavLg(){
    return (
        <>
            <div className="flex items-center justify-between mx-3 w-full">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-10 h-10">
                        <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full" />
                    </div>
                    <div class="flex items-center gap-3  rounded bg-white w-full px-3 py-1.5">
                        <BiSearch className="text-black-500"/>
                        <input type="search" placeholder="Search for Movies" className=" border-none bg-transparent focus:outline-none w-full" />
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
        </>)
}


const Navbar = () => {
    return (
        <>
            <nav className="bg-black-700 px-4 py-3">
                <div className="md:hidden">
                    {/* Mobile Screen */}
                    <NavSm />
                </div>
                <div className="hidden md:flex lg:hidden">
                    {/* Medium/Tab Screen */}
                    <NavMd />
                </div>
                <div className="hidden w-full lg:flex">
                    {/* Large Screen */}
                    <NavLg />
                </div>

            </nav>
        </>
    );
};

export default Navbar;