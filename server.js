const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const authMe = (req, res, next) => {
    console.log('checking auth');
    if (typeof req.cookies.nToken === 'undefined' | req.cookies.nToken === null) {
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
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost.27017/asoiaf-api';
const app = express();
assert = require('assert');

require('dotenv').config();
require('./profile/profile.controller.js')(app);

mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/asoiaf-api');
mongoose.connect(mongoUri, {
    useNewUrlParser: true
});
mongoose.connect(
    'mongodb://janeDoe:<janeDoe>@asoiafapi-cluster-shard-00-00-zuzxt.mongodb.net:27017,asoiafapi-cluster-shard-00-01-zuzxt.mongodb.net:27017,asoiafapi-cluster-shard-00-02-zuzxt.mongodb.net:27017/test?ssl=true&replicaSet=asoiafAPI-cluster-shard-0&authSource=admin&retryWrites=true', {
        useNewUrlParser: true
    }).catch(err, function () {
    throw err;
}); // db
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error: '));
mongoose.set('debug', true);

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(expressValidator());
app.use(checkAuth);
app.use(express.static('public'));
app.listen(3000, () => {
    console.log('App listening on port 3000!')
});

module.exports = app;





// // route route
// app.get('/', function (req, res) {
//     res.send(dummy)
// });

// // return a single profile
// app.get('/:id', function (req, res) {
//     const char = dummy[req.params.id]
//     if (char) {
//         return (res.send(char))
//     }
//     res.send("Sorry! No character profile with that ID exists.")
// });