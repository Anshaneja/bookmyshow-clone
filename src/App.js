import React from "react";
import { Route } from "react-router";
import DefaultHOC from "./HOC/DefaultHOC";

function HomePage(){
  return (<h1>Home Page</h1>)
}
function Contact(){
  return (<h1>Contact Page</h1>)
}
function App() {
  return (
    <>
      <DefaultHOC path='/' exact component={HomePage} />
      <DefaultHOC path='/contact' exact component = {Contact} />
    </>
  );
}

export default App;
