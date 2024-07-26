import React from "react";
import "./App.css";
import Sidemenu from "./Components/Sidemenu";
import Home from "./Components/Home";
import Release from "./Components/Release";
import Slider from "./Components/Slider";

function App() {
  return (
    <div className="background">
      <div className="main-containt">
        <div className="home">
          <Sidemenu />
        </div>
        <div className="main">
          <Home />
          <div className="slide">
            <Slider />
          </div>
        </div>
        <Release />
      </div>
    </div>
  );
}

export default App;
