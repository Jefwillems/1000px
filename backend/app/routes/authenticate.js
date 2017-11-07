const express = require('express');
const authRoutes = express.Router();
const User = require('../models/user'); // get our mongoose model
const passport = require('passport');
const dbconfig = require('../../config/database');
const jwt = require('jwt-simple');

// /api/auth/login
authRoutes.post('/login', (req, res, next) => {
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) {
            return res.json({
                success: false,
                msg: 'Authentication failed. User not found.'
            });
        }
        if (!user) {
            return res.json({
                success: false,
                msg: 'Authentication failed. User not found.'
            });
        }
        user.comparePassword(req.body.password, function (err, isMatch) {
            if (isMatch && !err) {
                // if user is found and password is right create a token
                const token = jwt.encode(user, dbconfig.secret);
                // return the information including token as JSON
                res.json({
                    success: true,
                    token: 'JWT ' + token
                });
            } else {
                res.send({
                    success: false,
                    msg: 'Authentication failed. Wrong password.'
                });
            }
        })
    });
});


authRoutes.get('/protected', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    const token = getToken(req.headers);
    if (token) {
        const decoded = jwt.decode(token, dbconfig.secret);
        User.findOne({
            username: decoded.username
        }, function (err, user) {
            if (err) {
                throw err;
            }
            if (!user) {
                return res.status(403).json({
                    success: false,
                    msg: 'Authentication failed. User not found.'
                });
            } else {
                res.json({
                    success: true,
                    msg: 'Welcome in the member area ' + user.username + '!'
                });
            }
        })
    } else {
        return res.status(403).send({
            success: false,
            msg: 'No token provided.'
        });
    }
});

function getToken(headers) {
    if (headers && headers.authorization) {
        let parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

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
                    msg: err
                });
            }
            res.json({
                success: true,
                msg: 'Successfully created new user.',
                user: newUser
            });
        });
    }

});
module.exports = authRoutes;