var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var parser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);


app.use(morgan('dev'))
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use('/api', appRoutes);

mongoose.connect('mongodb://localhost:27017/user').then(() => console.log('Database connected successfully')).catch(error => console.log(error))





app.listen(port, () => {
    console.log('Server is running on port ' + port)
});