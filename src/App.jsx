import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Loader from "./Components/Loader";
import Home from "./Components/Home";

function App() {
  const [loading, setLoading] = useState(true);

  return (
      <BrowserRouter>
        {loading && <Loader setLoading={setLoading}/>}
        <Home/> 
      </BrowserRouter>
  )
}

export default App;