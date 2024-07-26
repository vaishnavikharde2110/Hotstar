import React from "react";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="discription">
        <div className="Title">
          <img src="Title.png" alt="notfound" />
        </div>
        <div className="info">
          <pre>
            2024 <span>.</span> 4 Season <span>.</span> 7 Languages{" "}
            <span>.</span>{" "}
          </pre>
          <div className="sub-info">
            <h1>UA 7+</h1>
          </div>
        </div>
        <div className="information">
          <h2>
            As the war intensifies in Ravan's majestic Lanka, Hanuman faces
            migsub-titlehtier foes for his Loard Ram with his vaanar sena.
          </h2>
        </div>
        <div className="sub-title">
          <h1>Mythology | Animation | Adventure | Devotional & Spiritual</h1>
        </div>
        <div className="view">
          <div className="subscrib">
            <img src="playbtn.png" alt="" />
            <h1>Subscribe to Watch</h1>
          </div>
          <div className="add">
            <img src="addsign.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
