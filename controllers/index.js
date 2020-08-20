const express = require('express');
const router = express.Router();
// const Post = require('../models/Posts');


//  Home Route
router.get('/', (req, res) => {
  console.log("Home Route");
  res.send('home route');
})

// About Route
router.get('/about', (req, res) => {
  console.log('About Route');
  res.send('About Route');
})

// Contact Route
router.get('/contact', (req, res) => {
  console.log('Contact Route');
  res.send('Contact Route');
})

module.exports = router