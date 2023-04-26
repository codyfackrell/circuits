// Imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {setTrack, getTrackInfo, getQuiz} = require('./controller');
const {SERVER_PORT} = process.env;

const app = express();


// Middleware
app.use(express.json())
app.use(cors())

// Endpoints
app.post('/track/:trackId', setTrack);
app.get('/track', getTrackInfo);
app.get('/trackQuiz', getQuiz);
// app.post('/trackAnswer')

// Server
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))