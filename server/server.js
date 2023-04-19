// Imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {getTrackInfo, setTrack} = require('./controller');
const {SERVER_PORT} = process.env;

const app = express();


// Middleware
app.use(express.json())
app.use(cors())

// Endpoints
app.get('/track', getTrackInfo)
app.post('/track/', setTrack)

// Server
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))