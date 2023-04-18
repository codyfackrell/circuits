const favTrackSection = document.getElementById('favorite-track');
const favTrackInput = document.getElementById('fav-track-input');
const favTrackSubmit = document.getElementById('fav-track-submit');
const track = document.querySelectorAll('.track-card')
const trackPage = document.getElementById('track-page-container')

// Favorite Track Interactivity
const favTrack = () => {
    const messageArray = [`Everyone should visit ${favTrackInput.value}!`, `I've never been to ${favTrackInput.value}, but it's now on my list of tracks to visit!`, `Awesome choice! ${favTrackInput.value} is definitely one of the best tracks out there.`]

    const randomMessage = Math.floor(Math.random() * messageArray.length);

    favTrackSection.innerHTML = messageArray[randomMessage]
}

favTrackSubmit.addEventListener('click', favTrack)


//Requests 

track.forEach(card => {
    card.addEventListener('click', (event) => {
        let trackId = event.target.getAttribute('id');

        console.log(trackId)
        
        trackPage.innerHTML = ''

        axios.get(`/track/${trackId}`)
        .then((res) => {
            trackPage.innerHTML = '';

            window.location = '/trackPage/track.html';

            let trackData = res.data;

            trackPage.innerHTML =
            `<h1 class="track-title">${trackData.name}</h1>

            <section id="track-images">
                <div class="track-img-wrapper">
                    <img src="${trackData.trackImg}" alt="${trackData.name}" class="track-img">
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
    })
})
