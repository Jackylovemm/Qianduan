const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
	 CName: {type: String, required: true},
	 CAddress: {type: String, required: true},
	 CSex: {type: String, required: true},
	 CQQ: {type: String, required: true},
	 CPhone: {type: String, required: true},
})

module.exports = mongoose.model('Customer',customerSchema)