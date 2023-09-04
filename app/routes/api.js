var User = require('../models/user');

module.exports = function(router) {

    // user create method
    router.post('/users', (req, res) => {
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
        if (req.body.username === null || req.body.username === '' ||
            req.body.password === null || req.body.password === '' ||
            req.body.email === '' || req.body.email === null) {
            res.send('Ensure username, email and password were provided')
        } else {
            user.save().then(() => {
                res.send('User created')
            }).catch((err) => {
                res.send('Email or Username already exists')
            });
        }
    })

    return router;
}