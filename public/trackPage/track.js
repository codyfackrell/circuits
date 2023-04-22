// const trackPage = document.getElementById("track-info-section");
const pageTitle = document.getElementById("page-title");

// Retrieving Track Data
const retrieveTrack = () => {
  axios.get("http://localhost:4856/track").then((res) => {
    let trackData = res.data;

    trackName = document.querySelectorAll(".track-title").forEach((element) => element.innerHTML = trackData.trackName)
    document.querySelector(".track-img").src=trackData.trackImg;
    document.querySelector(".carousel1").src=trackData.carousel1;
    document.querySelector(".carousel2").src=trackData.carousel2;
    document.querySelector(".carousel3").src=trackData.carousel3;
    document.querySelector(".type").innerHTML = trackData.type;
    document.querySelector(".capacity").innerHTML = trackData.capacity;
    document.querySelector(".distance").innerHTML = trackData.distance;
    document.querySelector(".surface").innerHTML = trackData.surface;
    document.querySelector(".events").innerHTML = trackData.events;
    document.querySelector(".opened").innerHTML = trackData.opened;
    document.getElementById("random1").innerHTML = trackData.random1;
    document.getElementById("random2").innerHTML = trackData.random2;
    document.getElementById("random3").innerHTML = trackData.random3;
  });
};

retrieveTrack();


 // Image Carousel Functionality
 const slides = document.querySelectorAll(".slide");
 const nextBtn = document.querySelector(".btn-next");
 const prevBtn = document.querySelector(".btn-prev");

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