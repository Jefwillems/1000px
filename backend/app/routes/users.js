const express = require('express');
const routes = express.Router();
const User = require('../models/user'); // get our mongoose model
const passport = require('passport');
const dbconfig = require('../../config/database');
const jwt = require('jsonwebtoken');

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

//route to sign up a user at <link>/api/users/signup
routes.post('/signup', (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.email) {
        //TODO specify what information was missing.
        res.json({
            success: false,
            msg: 'Please fill in all information.'
        });
    } else {
        let isAdmin = false;
        if (req.body.admin) {
            isAdmin = req.body.admin;
        }
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            admin: isAdmin
        });
        newUser.save(function (err) {
            if (err) {
                return res.json({
                    success: false,
                    msg: JSON.stringify(err)
                });
            }
            res.json({
                success: true,
                msg: 'Successful created new user.'
            });
        });
    }
})

module.exports = routes;