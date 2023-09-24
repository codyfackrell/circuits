import React from "react";
import "./TrackPage.css";

const TrackPage = () => {
  return (
    <>
      <a href="/">
        <svg
          id="back-arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          {/* ! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com
          License - https://fontawesome.com/license (Commercial License)
          Copyright 2023 Fonticons, Inc. */}
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
        </svg>
      </a>

      <h1 class="track-title"></h1>

      {/* Track Images Section */}
      <section id="track-images">
        <div class="track-img-wrapper">
          <img src="" class="track-img" />
        </div>

        <div class="track-img-wrapper">
          <section id="carousel">
            <section class="slider">
              <div class="slide">
                <img src="" class="carousel-img carousel1" />
              </div>
              <div class="slide">
                <img src="" class="carousel-img carousel2" />
              </div>
              <div class="slide">
                <img src="" class="carousel-img carousel3" />
              </div>

              <button class="btn btn-next"> GREATER THAN </button>
              <button class="btn btn-prev"> LESS THAN </button>
            </section>
          </section>
        </div>
      </section>

      {/* Track Facts Section */}
      <div id="facts-container">
        <div id="track-facts">
          <h2 class="facts-title">Track Facts:</h2>
          <p class="fact-description">
            Track Location: <span class="fact location"></span>
          </p>
          <br />
          <p class="fact-description">
            Race Track Type: <span class="fact type"></span>
          </p>
          <br />
          <p class="fact-description">
            Capacity: <span class="fact capacity"></span>
          </p>
          <br />
          <p class="fact-description">
            Distance: <span class="fact distance"></span>
          </p>
          <br />
          <p class="fact-description">
            Track Surface: <span class="fact surface"></span>
          </p>
          <br />
          <p class="fact-description">
            Top Events: <span class="fact events"></span>
          </p>
          <br />
          <p class="fact-description">
            Opened: <span class="fact opened"></span>
          </p>
          <br />
        </div>
        <div id="random-facts">
          <h2 class="facts-title">Random Facts:</h2>
          <ul>
            <li id="random1"></li>
            <li id="random2"></li>
            <li id="random3"></li>
          </ul>
        </div>
      </div>

      {/* Quiz Starts Here */}
      <section id="quiz-container">
        <h3 class="quiz-intro">
          Test your knowledge about <span class="track-title quiz-intro"></span>
        </h3>

        <div class="quiz">
          <div id="question-container" class="hide">
            <p class="question-status">
              Question{" "}
              <span id="question-number" class="question-status"></span> of 3:
            </p>
            <p id="quiz-question"></p>

            <form id="quiz-answers"></form>
          </div>

          <div id="button-container">
            <button class="quiz-btn" id="quiz-start-btn">
              Start
            </button>
            <button class="quiz-btn hide" id="quiz-next-btn">
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
