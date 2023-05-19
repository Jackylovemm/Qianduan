const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
	  userName:{type: String, required: true},
	  userContact:{type: String, required: true},
	  address:{type:String, require:true},
	  goods:{
		  type:Array,required:true
	  },
	  time:{
		  type:Date,
		  default: Date.now
	  }
})
module.exports = mongoose.model('Order',OrderSchema)
