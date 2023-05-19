const express = require('express')
const mongoose = require('mongoose')
const app = express()
const User = require('./model/User')
const Book = require('./model/Book')
const Customer = require('./model/Customer')
const Order = require('./model/Order')

mongoose.connect('mongodb://127.0.0.1:27017/bookstore')


//<----------------------以下为订单管理路由----------------------->

// 查询所有订单
app.get('/orders',(req,res)=>{
	Order.find()
		.then((orders)=>{
			res.send(orders)
		})
})

//按照id查询订单并发送
app.get('/ordersSearchByID', (req, res) => {
	let o_id = req.query.o_id
	Order.find({
			_id: o_id
		})
		.then((orders) => [
			res.send(orders)
		])
})

//获取订单下的删除请求路由
app.get("/ordersDelete", (req, res) => {

	let o_id = req.query.o_id

	Order.deleteOne({
		_id: o_id
	}).then((mongooseD) => {
		res.send(mongooseD)
		console.log('Deleted....')
	}).catch(err => {
		console.log(err)
	}).finally(() => {
		mongoose.disconnect()
		mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
	})

})

//获取按照条件查询订单
app.get("/ordersSearch", (req, res) => {

	let userName = req.query.userName
	let address = req.query.address
	let userContact = req.query.userContact

	Order.find({
		userName: {
			$regex: `${userName}`
		},
		address: {
			$regex: `${address}`
		},
		userContact: {
			$regex: `${userContact}`
		}
	}).then((orders) => {
		res.send(orders)
	})
})



//<----------------------以下为顾客管理路由----------------------->

app.get('/customers',(req,res)=>{
	Customer.find()
		.then((customers)=>{
			res.send(customers)
		})
})

//按照id查询顾客并发送
app.get('/customerSearchByID', (req, res) => {
	let c_id = req.query.c_id
	Customer.find({
			_id: c_id
		})
		.then((customer) => [
			res.send(customer)
		])
})



// 更新相应顾客信息
app.get("/customersUpdate", (req, res) => {
	Customer.updateOne({
		_id: req.query.c_id
	}, {
		CName: req.query.CNameUpdate,
		CAddress: req.query.CAddressUpdate,
		CSex: req.query.CSexUpdate,
		CQQ: req.query.CQQUpdate,
		CPhone: req.query.CPhoneUpdate
	}).then((mongooseDocument) => {
		console.log('Update ...')
		res.send('更新中')
	}).catch(err => {
		console.log(err)
	}).finally(() => {
		mongoose.disconnect()
		mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
	})

})

//获取顾客下的删除请求路由
app.get("/customersDelete", (req, res) => {

	let c_id = req.query.c_id

	Customer.deleteOne({
		_id: c_id
	}).then((mongooseD) => {
		res.send(mongooseD)
		console.log('Deleted....')
	}).catch(err => {
		console.log(err)
	}).finally(() => {
		mongoose.disconnect()
		mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
	})

})

//获取按照条件查询顾客
app.get("/customersSearch", (req, res) => {

	let CName = req.query.CName
	let CAddress = req.query.CAddress
	let CQQ = req.query.CQQ
	let CPhone = req.query.CPhone

	Customer.find({
		CName: {
			$regex: `${CName}`
		},
		CAddress: {
			$regex: `${CAddress}`
		},
		CQQ: {
			$regex: `${CQQ}`
		},
		CPhone: {
			$regex: `${CPhone}`
		}
	}).then((customers) => {
		res.send(customers)
	})
})

// 设置路由转发数据
app.get("/customersAdd", (req, res) => {

	Customer.insertMany({
		CName: req.query.CNameAdd,
		CAddress: req.query.CAddressAdd,
		CSex: req.query.CSexAdd,
		CQQ: req.query.CQQAdd,
		CPhone: req.query.CPhoneAdd,
	}).then((mongooseDocument) => {
		console.log('inserted ...')
		res.send('插入成功!')
	}).catch(err => {
		console.log(err)
	}).finally(() => {
		mongoose.disconnect()
		mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
	})

})



// <---------------以下为书本信息管理路由---------------->

// 设置路由转发数据
app.get("/books", (req, res) => {
	Book.find()
		.then((books) => {
			res.send(books)
		})
})

//按照id查询书本并发送
app.get('/booksSearchByID', (req, res) => {
	let book_id = req.query.book_id
	Book.find({
			_id: book_id
		})
		.then((book) => [
			res.send(book)
		])
})

// 获取路由/users下的静态请求
app.get("/users", (req, res) => {

	let params = req.query
	// 获取请求中携带的数据
	let Res = {}
	User.find({
			userAccount: params.userAccount,
			passWord: params.passWord
		})
		.then((user) => {
			Res.user = user
			res.send(Res)
		})
})

//获取books下的删除请求路由
app.get("/booksDelete", (req, res) => {

	let book_id = req.query.book_id

	Book.deleteOne({
		_id: book_id
	}).then((mongooseD) => {
		res.send(mongooseD)
		console.log('Deleted....')
	}).catch(err => {
		console.log(err)
	}).finally(() => {
		mongoose.disconnect()
		mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
	})

})

//获取按照条件查询书本
app.get("/booksSearch", (req, res) => {

	let bookTitle = req.query.bookTitle
	let bookPublisher = req.query.bookPublisher

	Book.find({
		title: {
			$regex: `${bookTitle}`
		},
		publisher: {
			$regex: `${bookPublisher}`
		}
	}).then((books) => {
		res.send(books)
	})
})

// 设置路由转发数据
app.get("/booksAdd", (req, res) => {

	Book.insertMany({
		picture: req.query.bookPictureAdd,
		title: req.query.bookTitleAdd,
		author: req.query.bookAuthorAdd,
		publisher: req.query.bookPublisherAdd,
		price: req.query.bookPriceAdd
	}).then((mongooseDocument) => {
		console.log('inserted ...')
	}).catch(err => {
		console.log(err)
	}).finally(() => {
		mongoose.disconnect()
		mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
	})

})

// 更新相应信息
app.get("/booksUpdate", (req, res) => {
	Book.updateOne({
		_id: req.query.book_id
	}, {
		picture: req.query.bookPictureUpdate,
		title: req.query.bookTitleUpdate,
		author: req.query.bookAuthorUpdate,
		publisher: req.query.bookPublisherUpdate,
		price: req.query.bookPriceUpdate
	}).then((mongooseDocument) => {
		console.log('Update ...')
		res.send('更新中')
	}).catch(err => {
		console.log(err)
	}).finally(() => {
		mongoose.disconnect()
		mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
	})

})

app.listen(3000)
