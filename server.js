var express = require('express');
var bodyParser = require('body-parser');
var Licence = require('./licence');

var app = express();
app.use(bodyParser.json());

app.get('/api/licences', function(req, res, next) {
	Licence.find(function(err, licences) {
		if (err) return next(err);
		res.json(licences);
	});
});

app.post('/api/licences', function(req, res, next) {
	var licence = new Licence({
		name: req.body.name,
		url: req.body.url,
		type: req.body.type
	});

	licence.save(function(err, licence) {
		if (err) return next(err);
		res.status(201).json(licence);
	});
});

app.listen(3123);
