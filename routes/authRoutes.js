const passport = require('passport');

module.exports = app => {
  app.post(
    '/api/login',
    passport.authenticate('local-login', {
      successRedirect: '/',
      failureRedirect: '/api/login',
      failureFlash: true
    })
  );

  // Disabled registration route, only need one user for now
  // app.post(
  //   '/api/signup',
  //   passport.authenticate('local-signup', {
  //     successRedirect: '/',
  //     failureRedirect: '/api/signup',
  //     failureFlash: true
  //   })
  // );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
