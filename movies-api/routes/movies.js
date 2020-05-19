const express = require('express');
const passport = require('passport');

const MoviesServices = require('../services/movies');

//SCHEMAS
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies');

//VALIDATOR
const validationHandler = require('../utils/middleware/validationHandler');

//CACHE
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS
} = require('../utils/time');

// JWT Stragetie
require('../utils/auth/strategies/jwt');

//ROUTER
function moviesAPI(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesServices = new MoviesServices();

  //GET ALL
  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
      let { tags } = req.query;
      try {
        let movies = await moviesServices.getMovies({
          tags
        });
        res.status(200).json({
          data: movies,
          message: 'Show All Movies'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  //GET ONE
  router.get(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async (req, res, next) => {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      let { movieId } = req.params;
      try {
        let movie = await moviesServices.getMovie({
          movieId
        });
        res.status(200).json({
          data: movie,
          message: 'Show Movie'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  //CREATE
  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
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

  //UPDATE
  router.put(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
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

  //DELETE
  router.delete(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
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
    }
  );

  /*
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
  );*/
}

module.exports = moviesAPI;
