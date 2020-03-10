const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const checkAuth = (req, res, next) => {
  console.log('checking auth');
  if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
    req.user = null;
  } else {
    const token = req.cookies.nToken;
    const decodedToken = jwt.decode(token, {
      complete: true
    }) || {};
    req.user = decodedToken.payload;
  }
  next();
};
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 3000;
const profilesRouter = require('./controllers/profiles.js')

require('dotenv').config();
require('./data/asoiaf-db')

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/asoiaf-db');
// mongoose.connect(process.env.ATLAS_CONNECTION, {
//   useNewUrlParser: true,
// });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error: '));
mongoose.set('debug', true);

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(expressValidator());
app.use(cookieParser());
app.use(checkAuth); //location of this REALLY MATTERS
app.use(express.static('public'));

require('./controllers/auth.js')(app);

app.use('/profiles', profilesRouter);

app.listen(port, () => {
  console.log('App listening on port 3000!');
});

module.exports = app;
