const router = require('express').Router();
const PoolCluster = require('mysql2/typings/mysql/lib/PoolCluster');
const {User, Post, Comment} = require('../../models');

// create a new post 
// use the router post/ try and catch method 

router.post('/post', async(req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.body.user_id,
        });
        res.status(200).json(newPost);
    } catch (err){
        res.status(400).json(err);
    }
});

module.exports = router;