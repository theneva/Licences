var db = require('./db');

var Licence = db.model('Licence', {
	name: { type: String, required: true },
	url:  { type: String, required: true },
	type: { type: String, required: true },
	date: { type: Date, required: true, default: Date.now }
});

module.exports = Licence;
