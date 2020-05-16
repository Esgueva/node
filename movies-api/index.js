const express = require('express');
const app = express();

const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');

const { config } = require('./config/index');
const moviesAPI = require('./routes/movies');
const usermoviesAPI = require('./routes/userMovies');

const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandler');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//Cors
app.use(cors());

//const corsOptions = { origin: 'http://localhost' };
//app.use(cors(corsOptions));

//Body Parser
app.use(bodyParser.json());

//Morgan Http Logger
app.use(morgan('tiny'));

//Compress all responses
app.use(compression());

//Routes API
moviesAPI(app);
usermoviesAPI(app);

//Catch 404
app.use(notFoundHandler);

//Errors Middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

//Server
app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
  console.log('CORS-enabled web server');
});
