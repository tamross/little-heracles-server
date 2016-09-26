/* User types are: Club Official, Age Manager, Parent and Athlete.
 * Users may be more than one type, for example a Club Official or
 * an Age Manager might be a Parent.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
	username: String,
    password: String,
    OauthId: String,
    OauthToken: String,
    kind: {
		type: String,
		enum: ['CLUBOFFICIAL','AGEMANAGER','PARENT', 'ATHLETE'],
		required: true
	},
	name: {
        type: String,
        required: true
	}, 
	address: String,
	phone: String,
	email: String

	// Age Manager specific fields
	ageGroupManaged: String, // The age group they manage this season

	// Parent specific fields
	children: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],

	// Athlete specific fields
	parents: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	ageGroup: String, // The age group they are in this season
	athleteId: String, // Each athlete is assigned a special ID
	personalBests: [{type: mongoose.Schema.Types.ObjectId,ref: 'Result'}]
});
	
var User = mongoose.model('User', userSchema);
User.plugin(passportLocalMongoose);

module.exports = User;