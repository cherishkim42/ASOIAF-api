const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
});

// MUST use fxn here! ES6 => fxns DO NOT bind this!
UserSchema.pre("save", function (next) { // Define the callback w/ a regular fxn to avoid problems w/ this

    // Encrypt password
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash;
            next();
        });
    });
});

// Must use fxn for this.password to work
UserSchema.methods.comparePassword = function (password, done) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        done(err, isMatch);
    });
};

module.exports = mongoose.model("User", UserSchema);