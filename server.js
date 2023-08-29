var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');


app.use(morgan('dev'))
mongoose.connect('mongodb://localhost:27017/local').then(() => console.log('Database connected successfully')).catch(error => console.log(error))



app.listen(port, () => {
    console.log('Server is running on port ' + port)
});