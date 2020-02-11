const mongoose = require('mongoose');

const { Schema } = mongoose;

const Item = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	name: { type: String, required: true },
	description: { type: String },
	tags: { type: String }, // words to search by
	parentId: { type: String, required: true },
	collectionId: { type: String }, // id of the global object
	img: { type: String },
	updated: { type: Date, required: true },
	created: { type: Date, defualt: Date.now, required: true },
	category: { type: String }, // filter by category
	status: { type: String, required: true }, // filter by status
	type: { type: String }, // ???
	location: { type: String }, // ???
	count: { type: Number },
	checked: { type: Boolean }, // ???
	shared: { type: Boolean },
	sharedWith: { type: Array }
});

Item.methods = function(array) {};

module.exports = mongoose.model('Item', Item);
