const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get method for all posts in homepage
// route for single post

// get all posts 
router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ['username']}],
        });
        // Serialize data so the template can read it
        const posts = postData.map(post => post.get({plain:true}));
        // Pass serialized data and session flag into template
        res.render('homepage', {posts, loggedIn: req.session.loggedIn});
        console.log('posts grabbed');
        // res.send("hi")
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get single post
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['id','username']},
        { model: Comment, attributes: ['id', 'content', 'post_id', 'user_id', 'date_created'], include: [{ model: User, attributes: ['id', 'username']}]}],
        });
        const post = postData.get({plain:true});
        console.log(post);
        res.render('post', {post, loggedIn: req.session.loggedIn})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// Login with get route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Dashboard 
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: [{model:Post, attributes: ['id', 'title', 'content']}],
        });
        console.log(userData);
        const user = await userData.get({plain:true});
        res.render('dashboard', {user, loggedIn: req.session.loggedIn});
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

// Edit a post
router.get('/post/editPost/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {where: {user_id: req.session.id}});
        const post = await postData.get({plain:true});
        res.render('edit-post', {post, loggedIn: req.session.loggedIn});
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
});



module.exports = router;
