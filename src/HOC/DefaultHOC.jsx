import React from "react";
import DefaultLayout from '../layouts/DefaultLayout';
import { Route } from 'react-router-dom';

const DefaultHOC = ({ component : Component , ...rest}) => {
    return (
        <>
            <Route 
                {...rest}
                component = { (props) => (
                        <DefaultLayout>
                            <Component {...props}/>
                        </DefaultLayout>
                )}
            />
        </>
    );
};

export default DefaultHOC; 