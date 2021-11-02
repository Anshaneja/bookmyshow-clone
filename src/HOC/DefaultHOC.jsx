import React from "react";
import DefaultLayout from '../layouts/DefaultLayout';
import { Route } from 'react-router-dom';

const DefaultHOC = ({ component : Component , ...rest}) => {

    

    return (
        <>
            <Route 
                {...rest}
                component = { (props) => (
                        <DefaultLayout path={rest.path}>
                            <div className="w-full">
                                <Component {...props}/>
                            </div>
                        </DefaultLayout>
                )}
            />
        </>
    );
};

export default DefaultHOC; 