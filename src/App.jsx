import { useState } from "react";
import "./App.css";
import Sky from "./Components/Sky";
import Sea from "./Components/Sea";
import Loader from "./Components/Loader";

function App() {
  return (
      <>
        <Loader/>
        <div id="night">
        <Sky/>
        <Sea/>
        </div>
      </>
  )
}

export default App;