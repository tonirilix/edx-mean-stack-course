var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
var User = mongoose.model('User', schema, 'users');

var user = new User({
	name: 'Yis XD',
	email: 'yis@monts.io'
});

user.save(function(error) {
	if (error) {
		console.log(error);
		process.exit(1);
	}
	User.find({
		email: 'yis@monts.io'
	}, function(error, docs) {
		if (error) {
			console.log(error);
			process.exit(1);
		}
		console.log(require('util').inspect(docs));
		process.exit(0);
	});
});