const User = require('../models/user');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

module.exports = (app) => {

    app.post('/sign-up', (req, res) => {
        const user = new User(req.body);
        user.save().then((user) => {
            var token = jwt.sign({
                _id: user._id
            }, process.env.SECRET, {
                expiresIn: "60 days"
            });
            res.cookie('nToken', token, {
                maxAge: 900000,
                httpOnly: true
            });
            res.status(200);
        }).catch(err => {
            console.log(err.message);
            return res.status(400).send({
                err: err
            });
        });
    });

    app.post('/login', (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = new User(req.body);

        User.findOne({
            username
        }, "username password")
        .then(user => {
            if (!user) {
                return res.status(401).send({
                    message: "Wrong Username or Password"
                });
            }
            user.comparePassword(password, (err, isMatch) => {
                if (!isMatch) {
                    return res.status(401).send({
                        message: "Wrong Username or Password"
                    });
                }
                const token = jwt.sign({
                    _id: user._id,
                    username: user.username
                }, process.env.SECRET, {
                    expiresIn: "60 days"
                });
                res.cookie('nToken', token, {
                    maxAge: 900000,
                    httpOnly: true
                });
                res.status(200).json(user);
            });
        }).catch(err => {
            console.log(err);
        });
    });

    app.get('/logout', (req, res) => {
        res.clearCookie('nToken');
        res.status(200);
    });

};

