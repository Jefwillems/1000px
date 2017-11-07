const express = require('express');
const routes = express.Router();
const User = require('../models/user'); // get our mongoose model
const passport = require('passport');
const dbconfig = require('../../config/database');

// <link>/api/users/
routes.get('/', (req, res) => {
    res.json({
        message: 'Users'
    });
});

routes.get('/get/:id', (req, response) => {
    let id = req.params['id'];
    User.find({
        _id: id
    }, (err, res) => {
        if (!err) {
            response.json(res);
        }
    })
});

//route to return all users at <link>/api/users/all
routes.get('/all', (req, res) => {
    let query = req.query.s;
    if (query) {
        let values = query.split(',');
        let index = values.indexOf('password');
        if (index > -1) {
            values.splice(index, 1);
        }
        console.log(values);
    }

    User.find({}, function (err, users) {
        res.json(users);
    });
});



module.exports = routes;