const { Comment } = require('../models');

const commentData = [
    {
        "content": "I think squid game is sooo good",
        "user_id": 1,
        "post_id": 2
    },
    {
        "content": "I think there are  better tv shows out there ",
        "user_id": 2,
        "post_id": 3
    },
    {
        "content": "whoa you can speak 5 languages",
        "user_id": 3,
        "post_id": 3
    },
    {
        "content": "How to learn a languague at home?",
        "user_id": 2,
        "post_id": 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;