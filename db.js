var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/licences', function() {
	console.log('Connected to MongoDB');
});

module.exports = mongoose;
