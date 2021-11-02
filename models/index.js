const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// relationships
// user can have many post
// user can have many comments 
// a post can have many comments
// post has a user
// commment are post
// comments are users 


// User.hasMany(Post, {
//     foreignKey:'user_id',
//     onDelete: 'CASCADE',
// });

// User.hasMany(Comment, {
//     foreignKey:'user_id',
//     onDelete: 'CASCADE',
// });

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Comment.belongsTo(Post, {
//     foreignKey: 'post_id',
//     onDelete: 'CASCADE',
// });

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = {User, Post, Comment};

