module.exports = {
    'secret': 'longobnoxiouspassphrase',
    'database': 'mongodb://localhost:27017/saas-tutorial'
  };

//   var mongoose = require('mongoose');
// var gracefulShutdown;
// var dbURI = 'mongodb://localhost:27017/meanAuth';
// if (process.env.NODE_ENV === 'production') {
//   dbURI = process.env.MONGOLAB_URI;
// }

// mongoose.connect(dbURI);

// // CONNECTION EVENTS
// mongoose.connection.on('connected', function() {
//   console.log('Mongoose connected to ' + dbURI);
// });
// mongoose.connection.on('error', function(err) {
//   console.log('Mongoose connection error: ' + err);
// });
// mongoose.connection.on('disconnected', function() {
//   console.log('Mongoose disconnected');
// });

// // CAPTURE APP TERMINATION / RESTART EVENTS
// // To be called when process is restarted or terminated
// gracefulShutdown = function(msg, callback) {
//   mongoose.connection.close(function() {
//     console.log('Mongoose disconnected through ' + msg);
//     callback();
//   });
// };

// // BRING IN YOUR SCHEMAS & MODELS
// require('./users');