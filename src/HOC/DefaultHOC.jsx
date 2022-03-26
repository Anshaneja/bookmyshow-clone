
import React from "react";
import Navbar from '../components/NavbarComponent'

const DefaultLayout = (props) => {
    return (
        <div>
            <Navbar path={props.path}/>
            {props.children}
            <div>Footer</div>
        </div>
    );
};


export default DefaultLayout; 
