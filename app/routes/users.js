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

const getPopulatedUserById = (id, cb) => {
    User.findById(id)
        .populate({
            path: 'likes',
            model: 'Picture',
            populate: {
                path: 'author',
                model: 'User'
            }
        })
        .populate({
            path: 'pictures',
            model: 'Picture'
        })
        .populate({
            path: 'following',
            model: 'User',
            populate: {
                path: 'pictures',
                model: 'Picture',
                populate: {
                    path: 'author',
                    model: 'User'
                }
            }
        })
        .exec(cb);
}
// <link>/api/users/
routes.get('/', (req, res) => {
    res.json({
        message: 'Users'
    });
});

routes.get('/isAdmin', auth, (req, res, next) => {
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
            if (err) return next(err);
            return res.json({
                isAdmin: user.admin
            });
        });
});
routes.get('/profile/:id', auth, (req, res, next) => {
    let userId = req.params['id'];
    if (!userId) {
        console.log('no user specified, defaulting to logged in user');
        userId = req.payload._id;
    }
    getPopulatedUserById(userId, (err, user) => {
        if (err) return next(err)
        let images = user.pictures;
        images.sort(sortByDate);
        for (let i = 0; i < images.length; i++) {
            images[i].pathToPicture = images[i].pathToPicture.replace("app/public", "/file");
        }
        res.json(user);

    });
});

function flatten(arr) {
    return Array.prototype.concat(...arr);
}
routes.get('/activity', auth, (req, res, next) => {
    getPopulatedUserById(req.payload._id, (err, loggedUser) => {
        if (err) return next(err);
        const following = loggedUser.following;
        const allPics = following.map((user) => {
            return user.pictures
        })
        const pics = flatten(allPics).sort(sortByDate);
        for (let i = 0; i < pics.length; i++) {
            pics[i].pathToPicture = pics[i].pathToPicture.replace("app/public", "/file");
        }
        res.json(pics);
    });
})

routes.get('/get/:id', auth, (req, response, next) => {
    let id = req.params['id'];
    getPopulatedUserById(id, (err, user) => {
        if (err) return next(err);
        let images = user.pictures;
        for (let i = 0; i < images.length; i++) {
            images[i].pathToPicture = images[i].pathToPicture.replace("app/public", "/file");
        }
        response.json(user);
    });
});

routes.get('/loggedUser', auth, (req, res, next) => {
    let id = req.payload._id;
    getPopulatedUserById(id, (err, user) => {
        if (err) return next(err);
        if (user != null) {
            let images = user.pictures;
            console.log(images);
            for (let i = 0; i < images.length; i++) {
                images[i].pathToPicture = images[i].pathToPicture.replace("app/public", "/file");
            }
            images.sort(sortByDate);
            res.json(user);
        }
    });
});

routes.post('/follow', auth, (req, res, next) => {
    getPopulatedUserById(req.payload._id, (err, loggedUser) => {
        if (err) return next(err);
        getPopulatedUserById(req.body.id, (err, user) => {
            if (err) return next(err);
            loggedUser.following.push(user);
            loggedUser.save((err) => {
                if (err) return next(err);
                res.json(user);
            })
        });
    });
});

module.exports = routes;