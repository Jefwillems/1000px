const JwtStrategy = require('passport-jwt').Strategy;

const User = require('../app/models/user');

module.exports = function (passport) {
    let opts = {};
    opts.secretOrKey = process.env.PX1000_SECRET;
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