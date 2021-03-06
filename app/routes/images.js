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
const sortByLikes = (a, b) => {
    return a.likes - b.likes;
};
const replacePath = (pic) => {
    pic.pathToPicture = pic.pathToPicture.replace("app/public", "/file");
};
const getPopulatedPicById = (id) => {
    return Picture.findById(id)
        .populate({
            path: 'author',
            model: 'User',
            populate: {
                path: 'pictures',
                model: 'Picture'
            }
        })
};
const getPopulatedPictures = () => {
    return Picture.find()
        .populate({
            path: 'author',
            model: 'User'
        });
}

const getCurrentUser = (id, cb) => {
    User.findById(id)
        .populate({
            path: 'pictures',
            model: 'Picture'
        })
        .populate({
            path: 'likes',
            model: 'Picture'
        })
        .exec(cb);
}

router.get('/get/:id', (req, res, next) => {
    getPopulatedPicById(req.params['id'])
        .exec((err, pic) => {
            if (err) return next(err);
            if (pic === null) {
                return res.status(404).json({
                    msg: 'Image not found'
                });
            }
            replacePath(pic);
            return res.json(pic);
        });
});

router.get('/fresh', (req, response, next) => {
    getPopulatedPictures().exec((err, res) => {
        if (err) return next(err);
        res.sort(sortByDate);
        for (let i = 0; i < res.length; i++) {
            replacePath(res[i]);
        }
        response.json(res);
    });
});

router.get('/popular', (req, res, next) => {
    Picture.find({
        likes: {
            $gte: 2
        }
    }).populate({
        path: 'author',
        model: 'User'
    }).exec((err, pics) => {
        if (err) return next(err);
        pics.sort(sortByLikes);
        for (let i = 0; i < pics.length; i++) {
            replacePath(pics[i]);
        }
        return res.json(pics);
    })
});

router.get('/picks', (req, res) => {
    Picture.find({
        flagged: true
    }).populate({
        path: 'author',
        model: 'User'
    }).exec((err, images) => {
        if (err) res.status(500).json({
            err: err,
            msg: 'Something went wrong when searching for flagged pictures.'
        });
        images.sort(sortByDate);
        for (let i = 0; i < images.length; i++) {
            replacePath(images[i]);
        }
        res.json(images);
    });
});
router.get('/hasBeenLiked/:id', auth, (req, res, next) => {
    Picture.findById(req.params.id)
        .exec((err, pic) => {
            if (err) return next(err);
            const currentUser_id = req.payload._id;
            User.findById(currentUser_id, (err, user) => {
                if (err) return next(err);
                replacePath(pic);
                const user_likes_ids = user.likes;
                if (user_likes_ids.indexOf('' + pic._id) >= 0) {
                    //pic is already liked
                    return res.json({
                        response: true
                    });
                }
                return res.json({
                    response: false
                });
            })
        });
});

router.post('/unlike/:imageID', auth, (req, res, next) => {
    User.findOneAndUpdate({
        _id: req.payload._id
    }, {
        $pull: {
            likes: req.params['imageID']
        }
    }, (err, data) => {
        if (err) return next(err);
        Picture.findOneAndUpdate({
                _id: req.params['imageID']
            }, {
                $inc: {
                    likes: -1
                }
            }, {
                upsert: true,
                'new': true
            })
            .populate({
                path: 'author',
                model: 'User',
                populate: {
                    path: 'pictures',
                    model: 'Picture'
                }
            })
            .exec((err, pic) => {
                if (err) return next(err);
                res.json(pic);
            });
    })
});

router.post('/like/:imageID', auth, (req, res, next) => {

    Picture.findById(req.params.imageID).populate({
        path: 'author',
        model: 'User'
    }).exec((err, pic) => {
        if (err) return next(err);
        const currentUser_id = req.payload._id;
        User.findById(currentUser_id, (err, user) => {
            if (err) return next(err);
            replacePath(pic);
            const user_likes_ids = user.likes;
            if (user_likes_ids.indexOf('' + pic._id) >= 0) {
                return res.json(pic);
            }
            user.likes.push(pic);
            pic.likes += 1;
            user.save((err) => {
                if (err) return next(err);
                pic.save((err) => {
                    if (err) return next(err);
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
        pic.description = req.body.description;
        pic.camera = req.body.camera;
        pic.lens = req.body.lens;
        const currentUser_id = req.payload._id;
        pic.author = currentUser_id;
        pic.save(err => {
            if (err) return next(err);
            User.findById(currentUser_id, (err, user) => {
                if (err) return next(err);
                user.pictures.push(pic);
                user.save(err => {
                    if (err) return next(err);
                    res.json(pic);
                })
            });

        });
    }
});

router.delete('/remove/:id', auth, (req, res, next) => {
    getPopulatedPicById(req.params['id'])
        .exec((err, pic) => {
            if (err) return next(err);
            pic.remove((err) => {
                if (err) return next(err);
                return res.json(pic);
            })
        });


});

router.post('/flag/:id', auth, (req, res, next) => {
    getCurrentUser(req.payload._id, (err, user) => {
        if (err) return next(err);
        if (!user.admin) {
            return res.status(403).json({
                msg: 'only admins can perform this action'
            });
        }
        getPopulatedPicById(req.params['id']).exec((err, pic) => {
            if (err) return next(err);
            pic.flagged = true;
            pic.save((err) => {
                if (err) return next(err);
                res.json(pic);
            })
        });
    })
});

module.exports = router;