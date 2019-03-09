/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// const port = process.env.PORT || 3000;
const app = express();

const profileController = require('./controllers/profiles');

mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/asoiaf-api');
mongoose.connect(process.env.ATLAS_CONNECTION, {
  useNewUrlParser: true,
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error: '));
mongoose.set('debug', true);

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(expressValidator());
app.use(express.static('public'));

app.use('/', profileController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('App listening on port 3000!');
});

module.exports = app;
