const mongoose = require('mongoose')
const User = require('../model/User')

let users = [
	new User({
		userAccount:'19112220',
		passWord:'123'
	}),
	new User({
		userAccount:'19201120',
		passWord:'123'
	}),
	new User({
		userAccount:'19112221',
		passWord:'123'
	}),
	
]

mongoose.connect('mongodb://localhost:27017/bookstore')

User.insertMany(users)
	.then((mongooseDocument) => {
		console.log('inserted ...')
	}).catch(err => {
		console.log(err)
	}).finally(() => {
		mongoose.disconnect()
	})
