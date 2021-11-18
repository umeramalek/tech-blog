const router = require('express').Router();
const { User } = require('../../models');

// new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where:{email:req.body.email }});
        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' })
            return;
        }
        const validPassword = userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({
                message: 'Incorrect email or password, please try again'
            });
        };
        // else
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.status(200).json({user: userData, message: 'Successful login'});
        })
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});


// logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;

