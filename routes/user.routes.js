const express = require('express');
const router = express.Router();

// Dodaj nowy middleware sprawdzający, czy użytkownik jest zalogowany
const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/user/no-permission');
    }
  };
  
  // Dodaj middleware na początku router'a
  router.use(isLoggedIn);
  
  // Nowe podstrony dostępne tylko po zalogowaniu
  router.get('/profile', (req, res) => {
    res.render('profile', { user: req.user });
  });
  
  router.get('/profile/settings', (req, res) => {
    res.render('profileSettings', { user: req.user });
  });
  
  router.get('/logged', (req, res) => {
    res.render('logged', { user: req.user });
  });

module.exports = router;