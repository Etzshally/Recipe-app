const express = require('express');
const router = express.Router();
const User = require('../models/user');

// User signup
router.post('/signup', (req, res) => {
  const { username, password } = req.body;

  const newUser = new User({ username, password });

  newUser
    .save()
    .then(() => res.json('User registered!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// User login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        return res.status(404).json('User not found!');
      }

      // Compare passwords
      if (password === user.password) {
        return res.json('Login successful!');
      } else {
        return res.status(400).json('Incorrect password!');
      }
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});


// User logout
router.get('/logout', (req, res) => {
  // Clear session or token-related data here
  // For example, in a session-based authentication, you can use req.session.destroy() to destroy the session

  res.json('Logout successful!');
});


module.exports = router;
