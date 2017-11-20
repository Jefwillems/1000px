var express = require('express');
var authRoutes = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let User = mongoose.model('User');

// /api/auth/login
authRoutes.post('/login', (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (user) {
            return res.json({
                token: user.generateJWT()
            });
        } else {
            return res.status(401).json(info);
        }
    })(req, res, next);
});

authRoutes.post('/checkusername', (req, res, next) => {
    User.find({
        username: req.body.username
    }, function (err, result) {
        if (result.length) {
            res.json({
                'username': 'alreadyexists'
            })
        } else {
            res.json({
                'username': 'ok'
            })
        }
    });
})


//route to sign up a user at <link>/api/users/signup
authRoutes.post('/signup', (req, res, next) => {
    if (!req.body.username || !req.body.password || !req.body.email) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    var user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.setPassword(req.body.password)
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        return res.json({
            token: user.generateJWT()
        })
    });

});
module.exports = authRoutes;