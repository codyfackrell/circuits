const favTrackSection = document.getElementById('favorite-track');
const favTrackInput = document.getElementById('fav-track-input');
const favTrackSubmit = document.getElementById('fav-track-submit');
const tracks = document.getElementsByClassName('track-card');
const trackPage = document.getElementById('track-page-container');

// Favorite Track Interactivity
const favTrack = () => {
    const messageArray = [`Everyone should visit ${favTrackInput.value}!`, `I've never been to ${favTrackInput.value}, but it's now on my list of tracks to visit!`, `Awesome choice! ${favTrackInput.value} is definitely one of the best tracks out there.`]

    const randomMessage = Math.floor(Math.random() * messageArray.length);

    favTrackSection.innerHTML = messageArray[randomMessage]
}

favTrackSubmit.addEventListener('click', favTrack)


//Requests 
for(let i = 0; i < tracks.length; i++) {
    tracks[i].addEventListener('click', function() {
        let trackId = this.getAttribute('id');

        console.log(trackId)

        axios.post('http://localhost:4856/track').then(res => {
            console.log(res.status)
            window.location.replace('./trackPage/track.html') 
        })
    })
};