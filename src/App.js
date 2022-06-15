import "./styles/App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import Fitness from "./pages/Fitness";


function App() {
  return (
    
    <div className="App">
      <Router>
        
        <ParallaxProvider>
          <Routes>
            {/*<Route exact path="/" component={Home} />
            <Route path="/Fitness" component={Fitness}/>*/}

            <Route exact path="/" element={<Home />} />
            <Route path="/Fitness" element={<Fitness />} />
          </Routes>
        </ParallaxProvider>
      </Router>
      </div>
      
  );
}

export default App;
