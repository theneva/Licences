var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/api/licences', function(req, res) {
	res.json([
		{ "name": "JetBrains", "url": "https://www.jetbrains.com/student/" }
	]);
});

app.listen(3123);
