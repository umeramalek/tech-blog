const { Post } = require('../models');

const postData = [
    {
        "title": "Welcome to the tech-blog",
        "content": "Here, users can create posts, or comment on existing ones. Sign up to begin.",
        "user_id": 1
    },
    {
        "title": "Has anyone watched Game of Thrones",
        "content": "There is so much nudity, I couldn't watch it at first, but the story is really good",
        "user_id": 2
    },
    {
        "title": "Which movie is the all time best movie? ",
        "content": "Its definetly the avengers",
        "user_id": 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;