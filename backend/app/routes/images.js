const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const mime = require('mime');
let mongoose = require('mongoose');
const Picture = mongoose.model('Picture');
const User = mongoose.model('User');

let jwt = require('express-jwt');
let auth = jwt({
    secret: process.env.PX1000_SECRET,
    userProperty: 'payload',
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './app/public/img/')
    },
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
        });
    }
});
const upload = multer({
    storage: storage
});

const router = express.Router();

const sortByDate = (a, b) => {
    return new Date(b.datePublished) - new Date(a.datePublished);
};

router.get('/fresh', (req, response) => {
    //TODO GET FILEPATHS FROM DATABASE INSTEAD OF READING DIRECTORY
    Picture.find((err, res) => {
        res.sort(sortByDate);
        for (let i = 0; i < res.length; i++) {
            res[i].pathToPicture = res[i].pathToPicture.replace("app/public", "/file");
        }
        console.log(JSON.stringify(res));
        response.json(res);
    });

});

router.get('/popular', (req, res) => {

});

router.get('/picks', (req, res) => {
    Picture.find({
        flagged: true
    }, (err, images) => {
        if (err) res.status(500).json({
            err: err,
            msg: 'Something went wrong when searching for flagged pictures.'
        });
        images.sort(sortByDate);
        for (let i = 0; i < images.length; i++) {
            images[i].pathToPicture = images[i].pathToPicture.replace("app/public", "/file");
        }
        res.json(images);
    })
});

router.post('/like/:imageID', auth, (req, res) => {

    Picture.findById(req.params.imageID, (err, pic) => {
        if (err) {
            res.status(400).json({
                msg: 'Couldn\'t find picture with id: ' + req.params.imageID,
                err: err
            })
        }
        const currentUser_id = req.payload._id;
        User.findById(currentUser_id, (err, user) => {
            if (err) {
                res.status(500).json({
                    msg: 'An Error occured',
                    err: err
                });
            }
            user.likes.push(pic);
            pic.likes += 1;
            user.save((err) => {
                if (err) {
                    res.status(500).json({
                        msg: 'An Error occured',
                        err: err
                    });
                }
                pic.save((err) => {
                    if (err) {
                        res.status(500).json({
                            msg: 'An Error occured',
                            err: err
                        });
                    }
                    return res.json(pic);
                })
            })
        });
    });
});

// /api/img/add
router.post('/add', auth, upload.single('picture'), (req, res, next) => {
    if (!req.file) {
        res.status('500').json({
            err: 'file was not uploaded correctly.'
        });
    } else {
        if (!req.body.title || !req.file.path) {
            return res.status(400).json({
                message: 'Please fill out all fields'
            });
        }
        let pic = new Picture();
        pic.title = req.body.title;
        pic.pathToPicture = req.file.path;
        const currentUser_id = req.payload._id;
        //TODO: pic author, user.pictures
        pic.author = currentUser_id;
        pic.save(err => {
            if (err) res.status(500).json({
                err: err
            });
            User.findById(currentUser_id, (err, user) => {
                if (err) res.status(500).json({
                    err: err
                });
                console.log(user);
                console.log(pic);
                user.pictures.push(pic);
                user.save(err => {
                    if (err) res.status(500).json({
                        err: err
                    });
                    res.json(pic);
                })
            });

        });
    }
});

module.exports = router;