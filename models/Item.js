const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const Item = new Schema({
  userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
  name: {type: String, required: true}, 
  description: {type: String, required: true},
  tag: {type: String, required: true}, // words to search by
  parentId: {type: String, required: true}, 
  collectionId: {type: String}, // id of the global object
  img: {type: String}, 
  updated: {type: Date, required: true},
  created: {type: Date, defualt: Date.now, required: true},
  path: {type: String, required: true}, // /id/id/id - url to the object
  category: {type: String, required: true}, // filter by category
  status: {type: String, required: true}, // filter by status
  type: {type: String}, // ???
  location: {type: String, required: true}, // ???
  count: {type: Number, required: true}, 
  checked: {type: Boolean, required: true}, // ???
  shared: {type: Boolean, required: true},
  sharedWith: {type: [Array]},
  items: [
    {...this}
  ]
})

Item.methods.addItems = function(payload, type){
  const list = [...items]
  list.push({
    ...payload, 
    parentId: this._id, 
    checked: false, 
    path: this.path+'/'+this.parentId,
    
  })
}

module.exports = mongoose.model('Item', Item)