const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

const retrieveTrack = () => {
  axios
    .get() //retireve track data from db
    .then((res) => {
      
    });
};

// retrieveTrack();

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
