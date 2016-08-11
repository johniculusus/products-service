
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB

mongoose.connect('mongodb://admin:password@ds153835.mlab.com:53835/products-database');

// Express
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./routes/api'));

// Start server
var port = 8080, ip = "localhost";

app.listen(port, ip, function() {
  console.log('Express server listening on %d', port);
});
