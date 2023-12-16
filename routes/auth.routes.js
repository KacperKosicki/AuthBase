const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

// Dodaj nowy endpoint do wylogowywania
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Dodaj link do wylogowywania w podstronie user/logged
router.get('/logged', (req, res) => {
  res.render('logged', { user: req.user });
});

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/user/no-permission' }),
  (req, res) => {
    res.redirect('/user/logged');
  }
);

module.exports = router;