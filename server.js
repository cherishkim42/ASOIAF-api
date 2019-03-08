const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const AtlasUri = process.env.ATLAS_CONNECTION;
const app = express();
assert = require('assert');

require('dotenv').config();
const profileController = require('./controllers/profiles');

mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/asoiaf-api');
mongoose.connect('mongodb+srv://normal:7UmbrellaAcademy@gameofthrones-zzoam.mongodb.net/GameOfThrones?retryWrites=true', {
    useNewUrlParser: true
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error: '));
mongoose.set('debug', true);

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(expressValidator());
app.use(express.static('public'));

app.use('/', profileController);

app.listen(3000, () => {
    console.log('App listening on port 3000!')
});

module.exports = app;