const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get method for all posts in homepage
// route for single post
// Find the logged in user based on the session ID
 // If the user is already logged in, redirect the request to another route
// sign up route



module.exports = router;