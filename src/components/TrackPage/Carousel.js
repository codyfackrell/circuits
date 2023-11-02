import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

const Carousel = ({ carouselImgs, trackId }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === carouselImgs.length - 1 ? 0 : slide + 1)
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? carouselImgs.length - 1 : slide - 1)
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
      {carouselImgs.map((img, index) => (
        <img src={img} key={index} alt={`${trackId} ${index}`} className={slide === index ? "slide" : "slide slide-hidden"} />
      ))}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
      <span className="indicators">
        {carouselImgs.map((_, index) => (
          <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button>
        ))}
      </span>
    </div>
  );
};

export default Carousel;