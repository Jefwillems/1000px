const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let crypto = require('crypto');
let jwt = require('jsonwebtoken');

// set up a mongoose model and pass it using module.exports
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    likes: {
        type: [Schema.Types.ObjectId],
        ref: 'Picture',
    },
    pictures: {
        type: [Schema.Types.ObjectId],
        ref: 'Picture'
    },
    following: {
        type: [Schema.Types.ObjectId],
        ref: 'User'
    },
    hash: String,
    salt: String
});

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(32).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign({
        _id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, process.env.PX1000_SECRET);
};

mongoose.model('User', UserSchema);