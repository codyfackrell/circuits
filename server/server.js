// Imports
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const {SERVER_PORT} = process.env;
const {getTrackInfo} = require('./controller');


// Middleware
app.use(express.json())
app.use(cors())


// Server
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))

// Endpoints
app.get('/tracks', getTrackInfo)