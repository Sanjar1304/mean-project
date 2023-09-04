var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var User = require('./app/models/user');
var parser = require('body-parser');


app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(morgan('dev'))
mongoose.connect('mongodb://localhost:27017/user').then(() => console.log('Database connected successfully')).catch(error => console.log(error))



// user create method
app.post('/users', (req, res) => {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.save().then(() => {
        res.send('User created')
    }).catch((err) => {
        res.send('Email or Username already exists')
    });

});





app.listen(port, () => {
    console.log('Server is running on port ' + port)
});