import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Loader from "./Components/Loader";
import Name from "./Components/Name";
import Polaroid from "./Components/Polaroid";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";

function App() {
  return (
      <BrowserRouter>
        <Loader/>
        <div className="easel">
          <div className="canvas">
            <header>
              <Name/>
              <Polaroid/>
            </header>
            <main>
              <Nav/>
              <div className="content">
                <About/>
                <Experience/>
                <Projects/>
              </div>
            </main>
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App;