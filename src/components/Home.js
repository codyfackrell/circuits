import React from "react";
import "./Home.css";
import daytona from "../assets/daytona/daytona.png";
import cota from "../assets/cota/cota.png";
import monaco from "../assets/monaco/monaco.png";
import lemans from "../assets/lemans/lemans.png";
import indy from "../assets/indy/indy.png";
import silverstone from "../assets/silverstone/silverstone.png";

const Home = () => {
  return (
    <>
      <h1 class="page-title">Circuits of the World</h1>

      <section class="race-tracks">
        <div class="track-card" id="daytona">
          <img src={daytona} alt="daytona" class="track-img" />
          <p class="track-name">Daytona International Speedway</p>
          <p class="track-location">Daytona Beach, Florida, United States</p>
        </div>
        <div class="track-card" id="cota">
          <img src={cota} alt="cota" class="track-img" />
          <p class="track-name">Circuit of the Americas</p>
          <p class="track-location">Austin, Texas, United States</p>
        </div>
        <div class="track-card" id="monaco">
          <img src={monaco} alt="monaco" class="track-img" />
          <p class="track-name" id="monaco">
            Circuit de Monaco
          </p>
          <p class="track-location">Monte Carlo, Monaco</p>
        </div>
        <div class="track-card" id="lemans">
          <img src={lemans} alt="le-mans" class="track-img" />
          <p class="track-name">Circuit de la Sarthe</p>
          <p class="track-location">Le Mans, France</p>
        </div>
        <div class="track-card" id="indy">
          <img src={indy} alt="indy" class="track-img" />
          <p class="track-name">Indianapolis Motor Speedway</p>
          <p class="track-location">Indianapolis, Indiana, United States</p>
        </div>
        <div class="track-card" id="silverstone">
          <img src={silverstone} alt="silverstone" class="track-img" />
          <p class="track-name">Silverstone Circuit</p>
          <p class="track-location">Silverstone, England, United Kingdom</p>
        </div>
      </section>

      <form id="favorite-track">
        <p>What is your favorite circuit you have visited?</p>
        <div id="search-container">
          <input
            type="text"
            name="fav-track-input"
            id="fav-track-input"
            class="border size"
          />
          <input
            type="submit"
            value="Submit"
            id="fav-track-submit"
            class="border size"
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
