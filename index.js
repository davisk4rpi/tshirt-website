const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const key = require('./config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

const app = express();

// parses body of incoming http and attaches it to req.body
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
