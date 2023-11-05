import React, { useEffect, useState } from "react";
import { tracks } from "../../assets/trackCardData";
import Carousel from "./Carousel";
import "./TrackPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Quiz from "./Quiz";

const TrackPage = () => {
  const { trackId } = useParams();
  const [trackData, setTrackData] = useState({});
  const [trackImg, setTrackImg] = useState()
  const [carouselImgs, setCarouselImgs] = useState([])

  const findImages = (id) => {
    const imageData = tracks.find((track) => track.id === id);
    setTrackImg(imageData.img)
    setCarouselImgs(imageData.carouselImgs)
  }

  useEffect(() => {
    (async () => {
      const getTrackData = await axios.get(
        `https://eqduxbbhxqyrdgkaieul.supabase.co/trackpage/${trackId}`
        // `http://localhost:4000/trackpage/${trackId}`
      );
      setTrackData(getTrackData.data);
      document.title = `Circuits: ${getTrackData.data.trackName}`
    })();
    findImages(trackId)
  }, [trackId]);

console.log(trackData)

  return (
    <>
      <a href="/">
        <svg
          className="back-arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          {/* ! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
        </svg>
      </a>

      <h1 className="track-title">{trackData.trackName}</h1>

      {/* Track Images Section */}
      <section className="track-images">
        <div className="track-img-wrapper">
          <img src={trackImg} alt={`track for ${trackData.trackName}`} className="track-img" />
        </div>

        <Carousel carouselImgs={carouselImgs} trackId={trackId}/>
      </section>

      {/* Track Facts Section */}
      <div className="facts-container">
        <div className="track-facts">
          <h2 className="facts-title">Track Facts:</h2>
          <p className="fact-description">
            Track Location:{" "}
            <span className="fact location">{trackData.location}</span>
          </p>
          <br />
          <p className="fact-description">
            Race Track Type: <span className="fact type">{trackData.type}</span>
          </p>
          <br />
          <p className="fact-description">
            Capacity:{" "}
            <span className="fact capacity">{trackData.capacity}</span>
          </p>
          <br />
          <p className="fact-description">
            Distance:{" "}
            <span className="fact distance">{trackData.distance}</span>
          </p>
          <br />
          <p className="fact-description">
            Track Surface:{" "}
            <span className="fact surface">{trackData.surface}</span>
          </p>
          <br />
          <p className="fact-description">
            Top Events: <span className="fact events">{trackData.events}</span>
          </p>
          <br />
          <p className="fact-description">
            Opened: <span className="fact opened">{trackData.opened}</span>
          </p>
          <br />
        </div>
        <div className="random-facts">
          <h2 className="facts-title">Random Facts:</h2>
          <ul>
            <li className="random1">{trackData.random1}</li>
            <li className="random2">{trackData.random2}</li>
            <li className="random3">{trackData.random3}</li>
          </ul>
        </div>
      </div>

      <Quiz trackId={trackId} trackName={trackData.trackName} />

      <footer>
        <p>codyfackrell, 2023</p>
      </footer>
    </>
  );
};

export default TrackPage;
