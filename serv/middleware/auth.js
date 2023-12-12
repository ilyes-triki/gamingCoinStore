const passport = require('passport');
const User = require('../model/userModel');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.secretKey,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ _id: jwt_payload._id }).select(
        '-password'
      );
      user ? done(null, user) : done(null, false);
    } catch (error) {
      console.log(error);
    }
  })
);
const isAuth = () => passport.authenticate('jwt', { session: false });

module.exports = isAuth;
