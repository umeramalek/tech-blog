const {User} = require('../models');

const userData = [
    {
        "username": "HarryPotter",
        "email": "harry@hogwarts.com",
        "password": "password"
    },
    {
        "username": "Muggle",
        "email": "hermoine@hogwarts.com",
        "password": "password"
    },
    {
        "username": "redhead",
        "email": "ron@hogwarts.com",
        "password": "password"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;