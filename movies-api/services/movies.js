const { moviesMock } = require('../utils/mocks/movies');

class MoviesService {
  async getMovies() {
    let movies = await Promise.resolve(moviesMock);
    return movies || [];
  }

  async getMovie() {
    let movie = await Promise.resolve(moviesMock[0]);
    return movie || {};
  }

  async creatMovie() {
    let createMovie = await Promise.resolve(moviesMock[0].id);
    return createMovie || {};
  }

  async updateMovie() {
    let updateMovieId = await Promise.resolve(moviesMock[0].id);
    return updateMovieId || {};
  }

  async replacedMovie() {
    let replacedMovie = await Promise.resolve(moviesMock[0].id);
    return replacedMovie || {};
  }

  async deleteMovie() {
    let deletedMovie = await Promise.resolve(moviesMock[0].id);
    return deletedMovie || {};
  }
}
module.exports = MoviesService;
