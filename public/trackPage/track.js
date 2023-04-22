const trackPage = document.getElementById("track-info-section")
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

// Retrieving Track Data/Facts
const retrieveTrack = () => {
  axios
    .get('http://localhost:4856/track')
    .then((res) => {
      trackPage.innerHTML = '';

      let trackData = res.data;

      console.log(trackData)

      trackPage.innerHTML =
      `<h1 class="track-title">${trackData.trackName}</h1>

      <section id="track-images">
          <div class="track-img-wrapper">
              <img src="${trackData.trackImg}" alt="${trackData.trackName}" class="track-img">
          </div>

          <div class="track-img-wrapper">
              <section id="carousel">
                  <section class="slider">
                      <div class="slide">
                          <img src="${trackData.carousel1}">
                      </div>
                      <div class="slide">
                          <img src="${trackData.carousel2}">
                      </div>
                      <div class="slide">
                          <img src="${trackData.carousel3}">
                      </div>
                      <div class="slide">
                          <img src="${trackData.carousel4}">
                      </div>

                      <button class="btn btn-next"> > </button>
                      <button class="btn btn-prev"> < </button>
                  </section>
              </section>
          </div>
      </section>

      <section id="facts-container">
          <div id="track-facts">
              <h2 class="facts-title">Track Facts:</h2>
              <p class="fact-description">Race Track Type:</p> <p class="fact">${trackData.type}</p><br>
              <p class="fact-description">Capacity:</p> <p class="fact">${trackData.capacity}</p><br>
              <p class="fact-description">Distance:</p> <p class="fact">${trackData.distance}</p><br>
              <p class="fact-description">Track Surface:</p> <p class="fact">${trackData.surface}</p><br>
              <p class="fact-description">Top Events:</p> <p class="fact">${trackData.events}</p><br>
              <p class="fact-description">Opened:</p> <p class="fact">${trackData.opened}</p><br>

          </div>
          <div id="random-facts">
              <h2 class="facts-title">Random Facts:</h2>
              <ul>
                  <li>${trackData.random1}</li>
                  <li>${trackData.random2}</li>
                  <li>${trackData.random3}</li>
              </ul>
          </div>
      </section>`
  })
};

retrieveTrack();


// Image Carousel
let curSlide = 0;
let maxSlide = slides.length - 1;

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

nextBtn.addEventListener("click", () => {
  curSlide === maxSlide ? (curSlide = 0) : curSlide++;

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
});

prevBtn.addEventListener("click", () => {
  curSlide === 0 ? (curSlide = maxSlide) : curSlide--;

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
});
