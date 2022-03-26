import React from "react";
import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "7e2266e335589f47e49bcbfad0393379";

function abc(path, Component){
  return (
    <DefaultLayout path={path}>
      <div className="w-full">
        <Component />
      </div>
    </DefaultLayout>
  )
}
function App() {
  return (
    <>
      <Routes>
        {/* <DefaultHOC path='/' exact component={HomePage} />
        <DefaultHOC path='/movie/:id' component = {MoviePage} /> */}
        <Route path='/' exact element={abc('/',HomePage)} />
        <Route path='/movie/:id' element = {abc('/movie/:id', MoviePage)} />
      </Routes>
    </>
  );
}

export default App;
