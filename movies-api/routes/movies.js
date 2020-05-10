const express = require('express');
const MoviesServices = require('../services/movies');

const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middleware/validationHandler');

function moviesAPI(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesServices = new MoviesServices();

  router.get('/', async (req, res, next) => {
    let { tags } = req.query;
    try {
      let movies = await moviesServices.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: 'Show All Movies'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async (req, res, next) => {
      let { movieId } = req.params;
      try {
        let movie = await moviesServices.getMovie({ movieId });
        res.status(200).json({
          data: movie,
          message: 'Show Movie'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post(
    '/',
    validationHandler(createMovieSchema),
    async (req, res, next) => {
      let { body: movie } = req;
      try {
        let createMovieId = await moviesServices.creatMovie({ movie });
        res.status(201).json({
          data: createMovieId,
          message: 'Created Movie'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.put(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async (req, res, next) => {
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
      } catch (err) {
        next(err);
      }
    }
  );

  router.patch(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async (req, res, next) => {
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
        next(err);
      }
    }
  );

  router.delete('/:movieId', async (req, res, next) => {
    let { movieId } = req.params;
    try {
      let deleteMovie = await moviesServices.deleteMovie({ movieId });
      res.status(200).json({
        data: deleteMovie,
        message: 'Deleted Movie'
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesAPI;
