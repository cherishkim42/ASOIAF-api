const express = require('express');

const router = express.Router();
const Profile = require('../models/profile.js');

// INDEX to see all profile documents
router.get('/', (req, res) => {
  Profile.find().then((profiles) => {
    res.send(profiles);
  });
});

// CREATE a new profile document (via Postman, Insomnia)
router.post('/new', (req, res) => {
  let profile = new Profile(req.body);
  profile.save().then((profile) => {
    res.status(200).json(profile);
  });
});

// SHOW a single profile document
router.get('/:id', (req, res) => {
  Profile.findById(req.params.id).then((profile) => {
    res.json(profile);
  });
});

// UPDATE
router.put('/:id/edit', (req, res) => {
  Profile.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.send({ status: 200 });
    });
});

// DELETE
router.delete('/:id/delete', (req, res) => {
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

// // SHOW profiles based on a single trait
// router.get('/trait', (req, res) => {
//   console.log(req.query);
//   Profile.find(req.query)
//     .then((profiles) => {
//       res.send(profiles);
//     });
// });