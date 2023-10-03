import React, { useState } from "react";
import "./Home.css";
import TrackCard from "./TrackCard";
import { tracks } from "../../assets/trackCardData";

const Home = () => {
  // Favorite Track State
  const [favTrack, setFavTrack] = useState("");
  const [messageDisplayed, setMessageDisplayed] = useState(false);
  const [message, setMessage] = useState("");

  // Favorite Track Handler
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
        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            track={track.id}
            trackImg={track.img}
            trackName={track.name}
            trackLocation={track.location}
            />
        ))}
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
