const express = require('express');
const movieRouter = express.Router();

movieRouter
    .get('/genre-1', (req, res) => {
        res.send("you hit genre 1")
    })
    .get('/genre-2', (req, res) => {
        res.send("you hit genre 2")
    })

module.exports = movieRouter;