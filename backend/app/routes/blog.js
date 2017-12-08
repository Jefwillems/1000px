const express = require('express');
let mongoose = require('mongoose');
const User = mongoose.model('User');
const BlogPost = mongoose.model('BlogPost');

let jwt = require('express-jwt');
let auth = jwt({
    secret: process.env.PX1000_SECRET,
    userProperty: 'payload',
});

const router = express.Router();

router.get('/all', (req, res, next) => {
    BlogPost.find({})
        .populate({
            path: 'author',
            model: 'User'
        })
        .exec((err, posts) => {
            if (err) return next(err);
            return res.json(posts);
        });
});

router.get('/get/:id', (req, res,next) => {
    BlogPost.findById(req.params['id'])
        .populate({
            path: 'author',
            model: 'User'
        })
        .exec((err, post) => {
            if (err) return next(err);
            return res.json(post);
        });
});

router.post('/add', auth, (req, res,next) => {
    User.findById(req.payload._id, (err, user) => {
        console.log(req.body.title, req.body.text)
        console.log(req.body);
        const post = new BlogPost();
        post.title = req.body.title;
        post.text = req.body.text;
        post.author = user;
        post.save((err) => {
            if (err) return next(err);
            return res.json(post);
        })
    });
});



module.exports = router;