const express = require('express');
const app = express();

//if you want to create a route
const movieRouter = require('./routes/movie-router')
app.use('/movies_by_routes', movieRouter)


//if you want to have the subdirectories dynamically detected
app.get('/movie_genre_by_dynamic_subdirectory/:subdirectory/', (req, res) => {
    res.send(req.params)
})

app.listen(8000, () => {
    console.log(`Server listening at http://localhost:8000`)
})