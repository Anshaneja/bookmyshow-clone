
import React from "react";
import Navbar from '../components/NavbarComponent'
import Footer from "../components/Footer/FooterComponent";

const DefaultLayout = (props) => {
    return (
        <div>
            <Navbar path={props.path}/>
            {props.children}
            <Footer />
        </div>
    );
};


export default DefaultLayout; 
