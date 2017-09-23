const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');
const User = mongoose.model('user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy('local-login', (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  })
);

passport.use(
  new LocalStrategy('local-signup', (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (user) {
        return done(null, false, { message: 'Username already exists.' });
      }
      const newUser = new User({
        username
      });
      newUser.password = newUser.generateHash(password);
      newUser.save(function(err) {
        if (err) throw err;
        return done(null, newUser);
      });
    });
  })
);
