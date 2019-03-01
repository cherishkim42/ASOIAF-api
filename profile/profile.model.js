const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    aka: {
        type: Array,
        required: true
    },
    house: {
        type: Array,
        required: true
    },
    allies: {
        type: Array,
        required: true
    },
    against: {
        type: Array,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', PostSchema);