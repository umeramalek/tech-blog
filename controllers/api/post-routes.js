const router = require('express').Router();

const {User, Post, Comment} = require('../../models');

// create a new post 
// create a new comment 

// use the router post/ try and catch method 

router.post('/post', async(req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.body.user_id,
        });
        res.status(200).json(newPost);
        console.log(newPost);
    } catch (err){
        res.status(400).json(err);
        console.log(err)
    }
});

module.exports = router;

router.post('/:id', async(req,res) => {
    try {
        const newComment = await Comment.create({
            content: req.body.content,
            user_id: req.body.user_id,
            post_id: req.body.post_id
        });
        res.status(200).json(newComment);
        console.log(newComment);
    } catch(err) {
        res.status(400).json(err)
    }
})