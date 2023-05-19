const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
	 picture: {type: String, required: true},
	 title: {type: String, required: true},
	 author: {type: String, required: true},
	 publisher: {type: String, required: true},
	 price: {type: Number, required: true}
})

module.exports = mongoose.model('Book',bookSchema)