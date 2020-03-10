const express = require('express');
const router = express.Router();
const Profile = require('../models/profile.js');
const User = require('../models/user.js');

// INDEX to see all profile documents
router.get('/', (req, res) => {
  Profile.find().then((profiles) => {
    res.send(profiles);
  });
});

// SHOW a single profile document
router.get('/:id', (req, res) => {
  Profile.findById(req.params.id).then((profile) => {
    res.json(profile);
  });
});

// CREATE a new profile document (via Postman, Insomnia)
router.post('/new', (req, res) => {
  if (req.user) {
    // console.log(profile)
    let profile = new Profile(req.body);
    profile.save()
      .then(profile => {
        return res.status(200).json(profile);
      }).catch(err => {
        console.log(err.message);
      });
  } else {
    return res.status(401);
  }
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
