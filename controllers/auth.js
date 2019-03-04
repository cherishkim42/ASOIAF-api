const Profile = require('./profile/profile.model.js');
const User = require('./user/user.model.js');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

module.exports = function (app) {

    // form to sign up
    app.get('signup', function (req, res) {
        res.render('signup');
    });

    // POST sign up
    app.post('signup', function (req, res) {
        const user = new User(req.body);
        user.save().then(function (user) {
            var token = jwt.sign({
                _id: user._id
            }, process.env.SECRET, {
                expiresIn: '60 days'
            });
            res.cookie('gotToken', token, {
                maxAge: 900000,
                httpOnly: true
            });
            res.redirect('/');
        }).catch(function (err) {
            console.log(err.message);
            return res.status(400).send({
                err: err
            });
        });
    });

    // log out
    app.get('/logout', function (req, res) {
        res.clearCookie('gotToken');
        res.redirect('/');
    });

    // form to log in
    app.get('/login', function (req, res) {
        res.render('login');
    });

    // POST log in
    app.post('/login', function (req, res) {
        const username = req.body.username;
        const password = req.body.password;
        const user = new User(req.body);

        User.findOne({
                username
            }, 'username password')
            .then(function (user) {
                if (!user) {
                    return res.status(401).send({
                        messagae: 'Invalid Credentials'
                    });
                }
                user.comparePassword(password, function (err, isMatch) {
                    if (!isMatch) {
                        return res.status(401).send({
                            message: 'Invalid Credentials'
                        });
                    }
                    const token = jwt.sign({
                            _id: user._id,
                            username: user.username
                        },
                        process.env.SECRET, {
                            expiresIn: '60 days'
                        });
                    res.cookie('gotToken', token, {
                        maxAge: 900000,
                        httpOnly: true
                    });
                    res.redirect('/');
                });
            }).catch(function (err) {
                console.log(err);
            });
    });

}