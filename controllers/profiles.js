const express = require('express');
const router = express.Router();
const Profile = require('../models/profile.js');

// INDEX to see all profile documents
router.get('/profiles', function (req, res) {
    Profile.find()
        .then(function (profiles) {
            res.send(profiles)
        });
});

// CREATE a new profile document (via Postman, Insomnia)
router.post('/profiles/new', function (req, res) {
    const profile = new Profile(req.body)
    profile.save()
        .then(function (profile) {
            res.status(profile._id)
        });
});

// SHOW a single profile document
router.get('/profiles/:id', function (req, res) {
    Profile.findById(req.params.id).then(function (profile) {
        res.json(profile)
    });
});

// UPDATE
router.put('/profiles/:id', function (req, res) {
    Profile.findByIdAndUpdate(req.params.id, req.body).then(res.json(profile))
});

// DELETE
router.get('/profiles/:id', function (req, res) {
    Profile.findByIdAndRemove(req.params.id).then(function (profile) {
        res.redirect('/profiles');
    });
});


module.exports = router;