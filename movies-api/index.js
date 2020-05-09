const express = require('express');
const app = express();

const { config } = require('./config/index');

//localhost:3000
app.get('/', (req, res) => {
  res.send('hello world');
});

//http://localhost:3000/json
app.get('/json', (req, res) => {
  res.json({ hello: 'world' });
});

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
