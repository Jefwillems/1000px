const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
let jwt = require('express-jwt');
let auth = jwt({
    secret: process.env.PX1000_SECRET,
    userProperty: 'payload'
});
const sortByDate = (a, b) => {
    return new Date(b.datePublished) - new Date(a.datePublished);
};
// <link>/api/users/
routes.get('/', (req, res) => {
    res.json({
        message: 'Users'
    });
});

routes.get('/isAdmin', auth, (req, res) => {
    const currentUser_id = req.payload._id;
    User.findOne({
            _id: currentUser_id
        })
        .populate({
            path: 'likes',
            model: 'Picture'
        })
        .populate({
            path: 'pictures',
            model: 'Picture',
            populate: {
                path: 'author',
                model: 'User'
            }
        })
        .exec((err, user) => {
            if (err) res.status(500).json({
                msg: 'couldn\'t find user',
                err: err
            });
            return res.json({
                isAdmin: user.admin
            });
        });
});

routes.get('/profile', auth, (req, res) => {
    const currentUser_id = req.payload._id;
    User.findOne({
            _id: currentUser_id
        })
        .populate({
            path: 'likes',
            model: 'Picture'
        })
        .populate({
            path: 'pictures',
            model: 'Picture',
            populate: {
                path: 'author',
                model: 'User'
            }
        })
        .exec((error, user) => {
            let images = user.pictures;
            images.sort(sortByDate);
            for (let i = 0; i < images.length; i++) {
                images[i].pathToPicture = images[i].pathToPicture.replace("app/public", "/file");
            }
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(user);
            }
        });
});

routes.get('/get/:id', auth, (req, response) => {
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
routes.get('/all', auth, (req, res) => {
    let query = req.query.s;
    if (query) {
        let values = query.split(',');
        let index = values.indexOf('password');
        if (index > -1) {
            values.splice(index, 1);
        }
    }

    User.find({}, function (err, users) {
        res.json(users);
    });
});


module.exports = routes;