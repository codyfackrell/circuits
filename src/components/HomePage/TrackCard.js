import React from "react";
import { useNavigate } from "react-router-dom";

const TrackCard = ({track, trackImg, trackName, trackLocation}) => {
  const navigate = useNavigate()

  const handleCardClick = (trackId) => {
      navigate(`/trackpage/${trackId}`)
  }

  return (
    <div className="track-card" onClick={() => handleCardClick(track)}>
      <img src={trackImg} alt={track} className="track-img" />
      <p className="track-name">{trackName}</p>
      <p className="track-location">{trackLocation}</p>
    </div>
  );
};

export default TrackCard;