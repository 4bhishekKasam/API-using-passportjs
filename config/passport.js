const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../app/models/user');
const config = require('../config/main');

// Setup work and export for the JWT passport strategy
module.exports = function(passport) {
  const opts = {
  // jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
  jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: config.secret,
   };
//   passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     //const jwt_user_id = jwt_payload._doc._id
//    const jwt_user_id = jwt_payload.data._id
//     User.getUserById(jwt_user_id, function(err, user) {
//       if (err) {
//         return done(err, false);
//       }
//       if (user) {
//         done(null, user);
//       } else {
//         done(null, false);
//       }
//     });
//   }));

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    console.log(jwt_payload);
    console.log('token is = '+ jwt_payload._id);
    User.findOne({id: jwt_payload.id}, (err, user) => {
      if(err) {
        return done(err, false);
      }
      if(user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
}));

};