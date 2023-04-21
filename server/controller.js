let selectedTrack

module.exports = {
    setTrack: (req, res) => {
        const {track} = req.params;
        selectedTrack = track;
        res.sendStatus(200)
    },

    getTrackInfo: (req, res) => {
        
    },
}