// initializations
const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

const dummy = {
    '1': {
        'name': ['Aegon Targaryen', 'Jon Snow', 'King in the North'],
        'house': ['Targaryen', 'Stark'],
        'allegiance': ['Daenerys Targaryen'],
        'against': ['Night King', 'Cersei Lannister'],
        'status': 'alive'
    },
    '2': {
        'id': 2,
        'name': 'Sansa Stark',
        'house': ['Stark'],
        'allegiance': ['Jon Snow'],
        'against': ['Cersei Lannister', 'Petyr Baelish', 'House Bolton'],
        'status': 'alive'
    }
};

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