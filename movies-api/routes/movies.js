const express = require('express');
const MoviesServices = require('../services/movies');
const ConsoleCustom = require('../utils/console/custom');

function moviesAPI(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesServices = new MoviesServices();
  const logs = new ConsoleCustom();

  router.get('/', async (req, res, next) => {
    let { tags } = req.query;
    try {
      let movies = await moviesServices.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: 'Show All Movies'
      });
      logs.Info('GET ALL');
    } catch (err) {
      logs.Error(err);
      next();
    }
  });

  router.get('/:movieId', async (req, res, next) => {
    let { movieId } = req.params;
    try {
      let movie = await moviesServices.getMovie({ movieId });
      res.status(200).json({
        data: movie,
        message: 'Show Movie'
      });
      logs.Info('GET ONE');
    } catch (err) {
      logs.Error(err);
      next();
    }
  });

  router.post('/', async (req, res, next) => {
    let { body: movie } = req;
    try {
      let createMovieId = await moviesServices.creatMovie({ movie });
      res.status(201).json({
        data: createMovieId,
        message: 'Created Movie'
      });
      logs.Info('POST');
    } catch (err) {
      logs.Error(err);
      next();
    }
  });

  router.put('/:movieId', async (req, res, next) => {
    let { movieId } = req.params;
    let { body: movie } = req;
    try {
      let updatedMovieId = await moviesServices.updateMovie({
        movieId,
        movie
      });
      res.status(200).json({
        data: updatedMovieId,
        message: 'Updated Movie'
      });
      logs.Info('UPDATE');
    } catch (err) {
      logs.Error(err);
      next();
    }
  });

  router.patch('/:movieId', async (req, res, next) => {
    let { movieId } = req.params;
    let { body: movie } = req;
    try {
      let replacedMovieId = await moviesServices.replacedMovie({
        movieId,
        movie
      });
      res.status(200).json({
        data: replacedMovieId,
        message: 'Updated Movie'
      });
    } catch (err) {
      next();
    }
  });

  router.delete('/:movieId', async (req, res, next) => {
    let { movieId } = req.params;
    try {
      let deleteMovie = await moviesServices.deleteMovie({ movieId });
      res.status(200).json({
        data: deleteMovie,
        message: 'Deleted Movie'
      });
      logs.Info('DELETE');
    } catch (err) {
      logs.Error(err);
      next();
    }
  });
}

module.exports = moviesAPI;
