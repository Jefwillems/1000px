const express = require('express');
const routes = express.Router();
const User = require('../models/user'); // get our mongoose model

// <link>/api/users/
routes.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the coolest users API in the world!'
    });
});
//route to return all users at <link>/api/users/all
routes.get('/all', (req, res) => {
    User.find({}, function (err, users) {
        res.json(users);
    });
});

module.exports = routes;