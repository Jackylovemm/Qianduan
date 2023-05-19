const mongoose = require('mongoose')
const Customer = require('../model/Customer')

let customers = [
	new Customer({
		CName: 'Able',
		CAddress: '丰和南大道696号NCHU',
		CSex: '女',
		CQQ: '221027841',
		CPhone: '13908493611',
	}),
	new Customer({
		CName: 'Bble',
		CAddress: '丰和南大道696号NCHU',
		CSex: '男',
		CQQ: '221027842',
		CPhone: '13908493623',
	}),
	new Customer({
		CName: 'Cble',
		CAddress: '丰和南大道696号NCHU',
		CSex: '男',
		CQQ: '221027843',
		CPhone: '13908493615',
	}),
	new Customer({
		CName: 'Dble',
		CAddress: '丰和南大道696号NCHU',
		CSex: '女',
		CQQ: '221027844',
		CPhone: '13908493615',
	}),new Customer({
		CName: 'Eble',
		CAddress: '丰和南大道696号NCHU',
		CSex: '男',
		CQQ: '221027845',
		CPhone: '13908493616',
	}),
	
]

mongoose.connect('mongodb://localhost:27017/bookstore')

Customer.insertMany(customers)
	.then((mongooseDocument) => {
		console.log('inserted ...')
	}).catch(err => {
		console.log(err)
	}).finally(() => {
		mongoose.disconnect()
	})
