import React, { useState } from "react";

const Carousel = ({carouselImgs}) => {
  const [currentImage, setCurrentImage] = useState(0);

  console.log(carouselImgs)

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % 3);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1) % 3);
  };

  return (
    <div className="track-img-wrapper">
      <section className="carousel">
        <section className="slider">
          {carouselImgs.map((img, index) => (
            <div key={index} className="slide">
                <img src={img} className="carousel-img carousel2" />
            </div>
          ))}

          <button className="btn btn-next" onClick={nextImage}>
            {" "}
            {">"}{" "}
          </button>
          <button className="btn btn-prev" onClick={prevImage}>
            {" "}
            {"<"}{" "}
          </button>
        </section>
      </section>
    </div>
  );
};

export default Carousel;
