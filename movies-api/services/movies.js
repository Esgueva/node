const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }

  async getMovies({ tags }) {
    let query = tags && { tags: { $in: tags } };
    let movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie({ movieId }) {
    let movie = await this.mongoDB.get(this.collection, movieId);
    return movie || {};
  }

  async creatMovie({ movie }) {
    let createMovie = await this.mongoDB.create(this.collection, movie);
    return createMovie;
  }

  async updateMovie({ movieId, movie } = {}) {
    let updateMovieId = await this.mongoDB.update(
      this.collection,
      movieId,
      movie
    );
    return updateMovieId;
  }

  async deleteMovie({ movieId }) {
    let deleteMovie = await this.mongoDB.delete(this.collection, movieId);
    return deleteMovie;
  }
}
module.exports = MoviesService;
