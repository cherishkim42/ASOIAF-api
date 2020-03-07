const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: {
    type: String,
  },
  AKA: {
    type: Array,
  },
  house: {
    type: Array,
  },
  allies: {
    type: Array,
  },
  against: {
    type: Array,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model('Profile', ProfileSchema);
