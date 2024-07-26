import React from "react";
import "./Sidemenu.css";
function Sidemenu() {
  return (
    <div className="sidemenu">
      <div className="cover">
        <div className="logo">
          <img src="logo.png" alt="imgnotfound" />
        </div>
        <div className="subscribe">
          <h1>Subscribe</h1>
          <img src="arrow-icon.png" alt="arrow img" />
        </div>
      </div>
      <div className="navbar">
        <div className="icon">
          <img src="myspace.png" alt="" />
        </div>
        <div className="icon">
          <img src="search.png" alt="" />
        </div>
        <div className="icon">
          <img src="home.png" alt="" />
        </div>
        <div className="icon">
          <img src="tv.png" alt="" />
        </div>
        <div className="icon">
          <img src="movie.png" alt="" />
        </div>
        <div className="icon">
          <img src="sport.png" alt="" />
        </div>
        <div className="icon">
          <img src="categories.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sidemenu;
