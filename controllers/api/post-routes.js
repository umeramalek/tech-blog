const router = require('express').Router();
const {User, Post, Comment} = require('../../models');

// create a new post 
// create a new comment 

// use the router post/ try and catch method 

// Create new post
router.post('/new', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Create new comment
router.post('/:id', async (req, res) => {
    try {
        const newComment = await Comment.create({
            content: req.body.content,
            user_id: req.session.user_id,
            post_id: req.params.id,
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

// update a post
router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.update({
            content: req.body.content,
            title: req.body.title,
        }, {where: {id: req.params.id, user_id: req.session.user_id}}
        );
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

// delete a post
router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await Post.destroy({where: {id: req.params.id}})
        res.status(200).json(deletedPost);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
})

module.exports = router;

