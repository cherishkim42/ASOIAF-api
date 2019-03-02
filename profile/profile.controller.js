const Profile = require('../profile/profile.controller.js');
const User = require('../user/user.model.js');
// const express = require('express');
// const app = express();

module.exports = function (app) {

    // index
    app.get('/', function (req, res) {
        var currentUser = req.user;
        console.log(req.cookies);
        Profile.find().then(function (profiles) {
            res.render('profiles-index', {
                profiles,
                currentUser
            });
        }).catch(function (err) {
            console.log(err.message);
        });
    });

    // form for new profile
    app.get('/profiles/new', function (req, res) {
        res.render('profiles-new', {});
    });

    // generate the new profile
    app.post('/posts/new', function (req, res) {
        if (req.user) {
            let profile = new Profile(req.body);
            profile.save()
                .then(function (user) {
                    user.profiles.unshift(profile);
                    user.save();
                    return res.redirect('/posts/' + profile._id);
                }).catch(function (err) {
                    console.log(err.message);
                });
        } else {
            return res.status(401);
        }
    });

    // show one solitary profile
    app.get('/profiles/:id', function (req, res) {
        Profile.findById(req.params.id)
            .then(function (profile) {
                res.render('profiles-show', {
                    profile,
                    currentUser,
                    profileId: profile._id,
                });
            }).catch(function (err) {
                console.log(err.message);
            });
    });

    // form to edit a profile
    app.get('/profiles/:id/edit', function (req, res) {
        Profile.findById(req.params.id),
            function (err, resource) {
                res.render('profiles-edit', {
                    profile: profile
                });
            };
    });

    // solidify the edit
    app.put('/profiles/:id', function (req, res) {
        Profile.findByIdAndUpdate(req.params.id, req.body).then(function (profile) {
                res.redirect('/index');
            })
            .catch(function (err) {
                console.log(err.message)
            })
    });

    // delete a profile
    app.get('profiles/:id', function (req, res) {
        Profile.findByIdAndRemove(req.params.id)
            .then(function (profile) {
                res.redirect('/')
            }).catch(function (err) {
                console.log(err.message);
            });
    });


}