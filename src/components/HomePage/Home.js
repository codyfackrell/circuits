import React, { useState } from "react";
import "./Home.css";
import TrackCard from "./TrackCard";
import daytonaImg from "../../assets/daytona/daytona.png";
import cotaImg from "../../assets/cota/cota.png";
import monacoImg from "../../assets/monaco/monaco.png";
import lemansImg from "../../assets/lemans/lemans.png";
import indyImg from "../../assets/indy/indy.png";
import silverstoneImg from "../../assets/silverstone/silverstone.png";

const Home = () => {
  const [favTrack, setFavTrack] = useState("");
  const [messageDisplayed, setMessageDisplayed] = useState(false);
  const [message, setMessage] = useState("");

  const handleFavTrack = (e) => {
    e.preventDefault();

    if (!favTrack) {
      alert("Please type in a track name!");

    } else {
      const messageArray = [
        `Everyone should visit ${favTrack}!`,
        `I've never been to ${favTrack}, but it's now on my list of tracks to visit!`,
        `Awesome choice! ${favTrack} is definitely one of the best tracks out there.`,
      ];

      const randomMessage = Math.floor(Math.random() * messageArray.length);
      const trackMessage = messageArray[randomMessage];

      setMessage(trackMessage);
      setMessageDisplayed(true);
    }
  };

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

      <div className="favorite-track">
        {messageDisplayed ? (
          <>{message}</>
        ) : (
          <>
            <label>What is your favorite circuit you have visited?</label>
            <form className="search-container" onSubmit={handleFavTrack}>
              <input
                className="border size fav-track-input"
                onChange={(e) => setFavTrack(e.target.value)}
              />
              <input type="submit" className="border size fav-track-submit" />
            </form>
          </>
        )}
      </div>

      <footer>
        <p>codyfackrell, 2023</p>
      </footer>
    </>
  );
};

export default Home;
