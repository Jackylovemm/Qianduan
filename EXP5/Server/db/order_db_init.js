const mongoose = require('mongoose')
const Order = require('../model/Order')

let orders = [
	new Order({
		userName:'张三',
		userContact:'15079271111',
		address:'BootStreet',
		goods:[
			{
				goodsName:'Java高级程序设计',
				unitPrice:29,
				nums:1
			},
			{
				goodsName:'Go高级程序设计',
				unitPrice:42,
				nums:1
			},
			{
				goodsName:'C语言高级程序设计',
				unitPrice:37,
				nums:1
			}
		]
	}),
	
	new Order({
		userName:'李四',
		userContact:'15079272222',
		address:'BootStreet',
		goods:[
			{
				goodsName:'Java高级程序设计',
				unitPrice:29,
				nums:2
			},
			{
				goodsName:'Go高级程序设计',
				unitPrice:42,
				nums:2
			},
			{
				goodsName:'C语言高级程序设计',
				unitPrice:37,
				nums:2
			}
		]
	}),
	
	new Order({
		userName:'王五',
		userContact:'15079273333',
		address:'BootStreet',
		goods:[
			{
				goodsName:'Java高级程序设计',
				unitPrice:29,
				nums:3
			},
			{
				goodsName:'Go高级程序设计',
				unitPrice:42,
				nums:3
			},
			{
				goodsName:'C语言高级程序设计',
				unitPrice:37,
				nums:3
			}
		]
	}),
	
	
]

mongoose.connect('mongodb://localhost:27017/bookstore')

Order.insertMany(orders)
	.then((mongooseDocument) => {
		console.log('inserted ...')
	}).catch(err => {
		console.log(err)
	}).finally(() => {
		mongoose.disconnect()
	})
