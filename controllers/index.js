const express = require('express');
const router = express.Router();

// const Post = require('../models/Posts');


//  Home Route
router.get('/', (req, res) => {
  res.send('home route');
})

// About Route
router.get('/about', (req, res) => {
  res.send('About Route');
})

// Contact Route
router.get('/contact', (req, res) => {
  res.send('Contact Route');
})

module.exports = router