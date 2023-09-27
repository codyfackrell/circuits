require('dotenv').config();
const {CONNECTION_STRING} = process.env;

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
            url: CONNECTION_STRING
        }
    }
});

let selectedTrack

module.exports = {
    setTrack: (req, res) => {
        const {trackId} = req.params;
        selectedTrack = trackId;
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

    getQuiz: (req, res) => {
        sequelize.query(`
        SELECT questions.question, 
            json_agg(json_build_object('answer', answers.answer, 'isCorrect', answers."isCorrect"))
            AS answers
        FROM quizzes
        JOIN questions
        ON quizzes.id = questions."quizId"
        JOIN answers
        ON questions.id = answers."questionId"
        WHERE quizzes.name = '${selectedTrack}'
        GROUP BY questions.question;`)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
        })
    },
}