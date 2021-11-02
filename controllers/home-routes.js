const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get method for all posts in homepage
// route for single post

 

// get all posts 
router.get('/', async(req,res) => {
    try {
         // Get all projects and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User, 
                    attributes: ['username']
                }],
        });
        // Serialize data so the template can read it
        const data = postData.map((post) => post.get({plain:true}));

        // Pass serialized data and session flag into template
        res.render('homepage', { 
            data, logged_in: req.session.logged_in 
        });
    }catch(err) {
        console.log(err)
        res.status(500).json(err);
    }
});


// Get single post
router.get('/project/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
        {
            model: User,
            attributes: ['username'],
        },
        {
            model: Comment,
            attribute: ['id','content','post_id','user_id'],
            include: [{
                model: User,
                attributes: ['id','username']
            }]
        }
        ],
      });
  
      const post = postData.get({ plain: true });
  
      res.render('post', {post, logged_in: req.session.logged_in});
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Dashboard
router.get('/dashboard', redirect, async(req,res) => {
    try {
        const userData = await User.findByPk(req.session.uder_id, {
            include: [{model:Post, attributes:['id','title','content']}]
        });
    
        const user = await userData.get({plain:true});
        res.render('dashboard', {user, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err)
    }
});

// edit a post 
router.get('/post/editpost/:id', async (req,res) => {
    try{
        const editData = await Post.findByPk(req.params.id, {
            where: {user_id: req.session.id}
        });

        const edit = await editData.get({plain:true});
        res.render('edit_post', {postedit, loggedIn: req.session.loggedIn});
    } catch(err) {
        console.log(err),
        res.status(500).json(err)
    }
});

// login with get ruote

router.get('/login', (req,res) => {
    if (req.session.loggedIn){
        res.redirect('/');
        return;
    }
    res.render('login');
})



module.exports = router;