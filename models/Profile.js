const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Profile = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	name: { type: String, required: true },
	description: { type: String },
	hidden: { type: Boolean }
});

module.exports = mongoose.model('Profile', Profile);
