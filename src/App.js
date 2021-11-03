import React from "react";
import DefaultHOC from "./HOC/DefaultHOC";
import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "7e2266e335589f47e49bcbfad0393379";
function App() {
  return (
    <>
      <DefaultHOC path='/' exact component={HomePage} />
      <DefaultHOC path='/movie/:id' component = {MoviePage} />
    </>
  );
}

export default App;
