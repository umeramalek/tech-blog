const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get method for all posts in homepage
// route for single post
// Find the logged in user based on the session ID
 // If the user is already logged in, redirect the request to another route
// sign up route

// get all posts 
router.get('/', async(req,res) => {
    try {
         // Get all projects and JOIN with user data
        const getData = await Post.findAll({
            include: [{model: User, attributes: ['username']}],
        });
        // Serialize data so the template can read it
        const data = getData.map((post) => post.get({plain:true}));

        // Pass serialized data and session flag into template
        res.render('homepage', { 
            data, logged_in: req.session.logged_in 
        });
    }catch(err) {
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;