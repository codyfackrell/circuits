import React from "react";

const TrackCard = ({track, trackImg, trackName, trackLocation}) => {

  const handleCardClick = (clickedTrack) => {
    console.log(clickedTrack)
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