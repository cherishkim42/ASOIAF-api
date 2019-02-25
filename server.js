// initializations
const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

// route route
app.get('/', (req, res) => {
    res.send('Whee it works')
});

app.listen(3000, () => {
    console.log('App listening on port 3000!')
});