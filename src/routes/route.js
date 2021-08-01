const { Router } = require('express')
const router = Router()
const c_movies = require('../Controllers/c_movies');

// MODULEO DE PELICULAS - CRUD
router.get('/api/movies', c_movies.getAll)
router.get('/api/movies/byid/:id', c_movies.getByid)
router.post('/api/movies/create-movie', c_movies.create)
router.put('/api/movies/update-movie/:id', c_movies.update)
router.delete('/api/movies/delete-movie', c_movies.delete)

module.exports = router