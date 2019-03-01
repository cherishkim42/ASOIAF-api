// initializations
const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();



// route route
app.get('/', function (req, res) {
    res.send(dummy)
});

// return a single profile
app.get('/:id', function (req, res) {
    const char = dummy[req.params.id]
    if (char) {
        return (res.send(char))
    }
    res.send("Sorry! No character profile with that ID exists.")
});

app.listen(3000, () => {
    console.log('App listening on port 3000!')
});