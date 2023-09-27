import React from "react";
import "./TrackPage.css";

const TrackPage = () => {
  return (
    <>
      <a href="/">
        <svg
          className="back-arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          {/* ! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com
          License - https://fontawesome.com/license (Commercial License)
          Copyright 2023 Fonticons, Inc. */}
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
        </svg>
      </a>

      <h1 classNameName="track-title"></h1>

      {/* Track Images Section */}
      <section className="track-images">
        <div className="track-img-wrapper">
          <img src="" className="track-img" />
        </div>

        <div className="track-img-wrapper">
          <section className="carousel">
            <section className="slider">
              <div className="slide">
                <img src="" className="carousel-img carousel1" />
              </div>
              <div className="slide">
                <img src="" className="carousel-img carousel2" />
              </div>
              <div className="slide">
                <img src="" className="carousel-img carousel3" />
              </div>

              <button className="btn btn-next"> GREATER THAN </button>
              <button className="btn btn-prev"> LESS THAN </button>
            </section>
          </section>
        </div>
      </section>

      {/* Track Facts Section */}
      <div className="facts-container">
        <div className="track-facts">
          <h2 className="facts-title">Track Facts:</h2>
          <p className="fact-description">
            Track Location: <span className="fact location"></span>
          </p>
          <br />
          <p className="fact-description">
            Race Track Type: <span className="fact type"></span>
          </p>
          <br />
          <p className="fact-description">
            Capacity: <span className="fact capacity"></span>
          </p>
          <br />
          <p className="fact-description">
            Distance: <span className="fact distance"></span>
          </p>
          <br />
          <p className="fact-description">
            Track Surface: <span className="fact surface"></span>
          </p>
          <br />
          <p className="fact-description">
            Top Events: <span className="fact events"></span>
          </p>
          <br />
          <p className="fact-description">
            Opened: <span className="fact opened"></span>
          </p>
          <br />
        </div>
        <div className="random-facts">
          <h2 className="facts-title">Random Facts:</h2>
          <ul>
            <li className="random1"></li>
            <li className="random2"></li>
            <li className="random3"></li>
          </ul>
        </div>
      </div>

      {/* Quiz Starts Here */}
      <section className="quiz-container">
        <h3 className="quiz-intro">
          Test your knowledge about <span className="track-title quiz-intro"></span>
        </h3>

        <div className="quiz">
          <div className="question-container hide">
            <p className="question-status">
              Question{" "}
              <span className="question-number question-status"></span> of 3:
            </p>
            <p className="quiz-question"></p>

            <form className="quiz-answers"></form>
          </div>

          <div className="button-container">
            <button className="quiz-btn quiz-start-btn">
              Start
            </button>
            <button className="quiz-btn quiz-next-btn hide">
              Next
            </button>
          </div>
        </div>
      </section>

      <footer>
        <p>codyfackrell, 2023</p>
      </footer>
    </>
  );
};

export default TrackPage;
