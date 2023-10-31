// Imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {setTrack, getTrackInfo, getQuiz} = require('./controller');
const {SERVER_PORT} = process.env;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(`../${__dirname}/public`))

// Endpoints
// app.post('/track/:trackId', setTrack);
app.get('/trackpage/:trackId', getTrackInfo);
app.get('/trackQuiz/:trackId', getQuiz);

// Server
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))