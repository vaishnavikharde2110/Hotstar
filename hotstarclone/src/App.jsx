import React from "react";
import "./App.css";
import Sidemenu from "./Components/Sidemenu";
import Home from "./Components/Home";
import Release from "./Components/SwiperComponent";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";

function App() {
  const movies = [
    {
      id: 1,
      title: 'Bloody Ishq',
      image: 'release1.webp',
    },
    {
      id: 2,
      title: 'Chutney Samrat',
      image: 'release2.webp',
    },
    {
      id: 3,
      title: 'Tere Aane Se',
      image: 'release3.webp',
    },
    {
      id: 3,
      title: 'Tere Aane Se',
      image: 'release4.webp',
    },
    {
      id: 3,
      title: 'Tere Aane Se',
      image: 'release5.webp',
    },
    {
      id: 3,
      title: 'Tere Aane Se',
      image: 'release6.webp',
    },

    {
      id: 3,
      title: 'Tere Aane Se',
      image: 'release7.webp',
    },
    {
      id: 3,
      title: 'Tere Aane Se',
      image: 'show1.webp',
    },
    {
      id: 3,
      title: 'Tere Aane Se',
      image: 'show2.webp',
    },

    // Add more movies as needed
  ];
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
        <Release movies={movies}/>
        <Release movies={movies}/>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
