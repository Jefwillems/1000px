const express = require('express');
const authRoutes = express.Router();
const User = require('../models/user'); // get our mongoose model
const passport = require('passport');
const dbconfig = require('../../config/database');
const jwt = require('jsonwebtoken');

// /api/auth/login
authRoutes.post('/login', (req, res) => {
    User.findOne({
        name: req.body.username
    }, (error, user) => {
        if (error) throw error;

        if (!user) {
            res.json({
                success: false,
                message: 'Authentication failed. User not found.'
            });
        } else if (user) {
            user.comparePassword(req.body.password, (error, ok) => {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.sign(user, config.secret);
                    // return the information including token as JSON
                    res.json({
                        success: true,
                        token: 'JWT ' + token
                    });
                } else {
                    res.status(401).send({
                        success: false,
                        msg: 'Authentication failed. Wrong password.'
                    });
                }
            });
        }
    });
});

//route to sign up a user at <link>/api/users/signup
authRoutes.post('/signup', (req, res) => {
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
module.exports = authRoutes;