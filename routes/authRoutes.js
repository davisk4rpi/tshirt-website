const passport = require('passport');

module.exports = app => {
  app.post(
    '/api/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/api/login',
      failureFlash: true
    })
  );
  app.post(
    '/api/signup',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/api/login',
      failureFlash: true
    })
  );
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
