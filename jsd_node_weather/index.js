var express = require('express');
var path = require('path');
var faker = require('faker');
var request = require('request');

var app = express();
app.use(express.static('public'));
// ROUTES
app.get('/', function (req, res) {
  res.send('index.html');
});

app.get('/geo', function (req, res) {
	res.send('I am working!');
});

  app.get('/geo', function (req, res) {
    var latitude = faker.address.latitude();
    var longitude = faker.address.longitude();

    res.send({
      lat: latitude,
      lng: longitude,
    });
  });

app.get('/geo', function (req, res) {
	var latitude = faker.address.latitude();
	var longitude = faker.address.longitude();

	res.send({
	   lat: latitude,
	   lng: longitude,
	  });
});




// KICK OFF THE APP
app.listen(1337, function () {
	console.log('The magic is going down on 1337!')
});