import React from "react";
import "./Home.css";
import TrackCard from "./TrackCard";
import daytonaImg from "../assets/daytona/daytona.png";
import cotaImg from "../assets/cota/cota.png";
import monacoImg from "../assets/monaco/monaco.png";
import lemansImg from "../assets/lemans/lemans.png";
import indyImg from "../assets/indy/indy.png";
import silverstoneImg from "../assets/silverstone/silverstone.png";

const Home = () => {
  return (
    <>
      <h1 className="page-title">Circuits of the World</h1>

      <section className="race-tracks">
        <TrackCard 
          track="daytona"
          trackImg={daytonaImg}
          trackName="Daytona International Speedway"
          trackLocation="Daytona Beach, Florida, United States"
        />
        <TrackCard 
          track="cota"
          trackImg={cotaImg}
          trackName="Circuit of the Americas"
          trackLocation="Austin, Texas, United States"
        />
        <TrackCard 
          track="monaco"
          trackImg={monacoImg}
          trackName="Circuit de Monaco"
          trackLocation="Monte Carlo, Monaco"
        />
        <TrackCard 
          track="lemans"
          trackImg={lemansImg}
          trackName="Circuit de la Sarthe"
          trackLocation="Le Mans, France"
        />
        <TrackCard 
          track="indy"
          trackImg={indyImg}
          trackName="Indianapolis Motor Speedway"
          trackLocation="Indianapolis, Indiana, United States"
        />
        <TrackCard 
          track="silverstone"
          trackImg={silverstoneImg}
          trackName="Silverstone Circuit"
          trackLocation="Silverstone, England, United Kingdom"
        />
      </section>

      <form className="favorite-track">
        <p>What is your favorite circuit you have visited?</p>
        <div className="search-container">
          <input
            type="text"
            name="fav-track-input"
            className="border size fav-track-input"
          />
          <input
            type="submit"
            value="Submit"
            className="border size fav-track-submit"
          />
        </div>
      </form>

      <footer>
        <p>codyfackrell, 2023</p>
      </footer>
    </>
  );
};

export default Home;
