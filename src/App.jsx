import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Polaroid from "./Components/Polaroid";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";


function App() {
  return (
      <BrowserRouter>
        <div className="canvas">
          <header>
            <Nav/>
            <h1>
              <Link to="/">Alice Weng</Link><br/> is currently open to work.
            </h1>
            <Polaroid/>
          </header>
          <main>
            <About/>
            <Experience/>
            <Projects/>
          </main>
        </div>
      </BrowserRouter>
  )
}

export default App;