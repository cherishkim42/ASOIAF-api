/* eslint-disable no-console */
/* eslint-disable no-shadow */
const express = require('express');

const router = express.Router();
const Profile = require('../models/profile.js');

// INDEX to see all profile documents
router.get('/profiles', (req, res) => {
  Profile.find().then((profiles) => {
    res.send(profiles);
  });
});

// CREATE a new profile document (via Postman, Insomnia)
router.post('/profiles/new', (req, res) => {
  const profile = new Profile(req.body);
  profile.save().then((profile) => {
    res.status(200).json(profile);
  });
});

// SHOW profiles based on a single trait
router.get('/profiles/trait', (req, res) => {
  console.log(req.query);
  Profile.find(req.query)
    .then((profiles) => {
      res.send(profiles);
    });
});

// SHOW a single profile document
router.get('/profiles/:id', (req, res) => {
  Profile.findById(req.params.id).then((profile) => {
    res.json(profile);
  });
});

// UPDATE
router.put('/profiles/:id/edit', (req, res) => {
  Profile.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.send({ status: 200 });
    });
});

// DELETE
router.delete('/profiles/:id/delete', (req, res) => {
  Profile.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ status: 200 });
    });
});

// GET Catchall
router.get('/*', (req, res) => {
  res.send({ status: 400 });
});

module.exports = router;
