import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Loader from "./Components/Loader";
import Home from "./Components/Home";

function App() {
  return (
      <BrowserRouter>
        <Loader/>
        <Home/> 
      </BrowserRouter>
  )
}

export default App;