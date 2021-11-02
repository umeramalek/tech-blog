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


// create a new post 
router.post('/:id', async(req,res) => {
    try {
        const newComment = await Comment.create({
            content: req.body.content,
            user_id: req.body.user_id,
            post_id: req.body.post_id
        });
        res.status(200).json(newComment);
    
    } catch(err) {
        res.status(400).json(err)
        console.log(err)
    }
});

// update a post 
router.put('/:id', async(req,res) => {
    try {
        const updatePost = await Post.update({
            content: req.body.content,
            titel: req.body.title,
        }, {
            where:{id: req.params.id, user_id:req.session.user_id}
        });
        res.status(200).json(updatePost)
        } catch(err) {
            res.status(400).json(err)
            console.log(err)
        }
});


// delete a post 
router.delete('/:id', async (req,res) => {
    try{
        const deletePost = await Post.destroy({where:{id:req.params.id}})
        res.status(200).json(deletePost);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
        
    }
})














module.exports = router;