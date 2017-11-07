const JwtStrategy = require('passport-jwt').Strategy;

const User = require('../app/models/user');
const config = require('./database');

module.exports = function (passport) {
    let opts = {};
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({
            username: jwt_payload.username
        }, function (err, user) {
            if (err) {
                return done(err, false, "something went wrong");
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false, "username does not exist");
            }
        })
    }));
}