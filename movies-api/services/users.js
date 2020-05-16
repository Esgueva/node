const MongoLib = require('../lib/mongo');
const bcrypt = require('bcrypt');

class UsersService {
  constructor() {
    this.collection = 'users';
    this.mongoDB = new MongoLib();
  }

  async getUser({ email }) {
    const [user] = await this.mongoDB.getAll(this.collection, { email });
    return user;
  }

  async createUser({ user }) {
    const { name, email, password } = user;

    password = bcrypt.hasPassword(password);

    const createUserId = await this.mongoDB.create(this.collection, {
      name,
      email,
      password
    });

    return createUserId;
  }
}

module.exports = UsersService;
