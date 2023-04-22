const {CONNECTION_STRING} = process.env;

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

let selectedTrack

module.exports = {
    setTrack: (req, res) => {
        const {trackId} = req.params;
        selectedTrack = trackId;
        console.log(trackId)
        res.sendStatus(200)
    },

    getTrackInfo: (req, res) => {
        sequelize.query(`
        SELECT * FROM tracks
        WHERE "trackCode" = '${selectedTrack}'`)
        .then((dbRes) => {
            res.status(200).send(dbRes[0][0])
        })
        .catch((err) => {
            console.log(err)
        })
    },
}