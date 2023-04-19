let selectedTrack

module.exports = {
    getTrackInfo: (req, res) => {
        
    },

    setTrack: (req, res) => {
        const {track} = req.params;
        selectedTrack = track;
        res.sendStatus(200)
    },
}