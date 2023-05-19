const mongoose = require('mongoose')
const Book = require('../model/Book')

let books = [
	new Book({
		picture: 'https://img10.360buyimg.com/n1/s200x200_jfs/t1/119119/28/16355/390609/5f4870aaE11ee9a70/a3942abebcb6534a.jpg',
		title: 'JavaScript 高级程序设计（第 4 版）',
		author: '[美] 马特·弗里斯比（Matt Frisbie）著 ',
		publisher: '人民邮电出版社',
		price: 45
	}),
	new Book({
		picture: 'https://img10.360buyimg.com/n1/s200x200_jfs/t1/119119/28/16355/390609/5f4870aaE11ee9a70/a3942abebcb6534a.jpg',
		title: 'JavaScript 高级程序设计（第 4 版）',
		author: '[美] 马特·弗里斯比（Matt Frisbie）著 ',
		publisher: '人民邮电出版社',
		price: 46
	}),
	new Book({
		picture: 'https://img10.360buyimg.com/n1/s200x200_jfs/t1/119119/28/16355/390609/5f4870aaE11ee9a70/a3942abebcb6534a.jpg',
		title: 'JavaScript 高级程序设计（第 4 版）',
		author: '[美] 马特·弗里斯比（Matt Frisbie）著 ',
		publisher: '人民邮电出版社',
		price: 47
	}),
	new Book({
		picture: 'https://img10.360buyimg.com/n1/s200x200_jfs/t1/119119/28/16355/390609/5f4870aaE11ee9a70/a3942abebcb6534a.jpg',
		title: 'JavaScript 高级程序设计（第 4 版）',
		author: '[美] 马特·弗里斯比（Matt Frisbie）著 ',
		publisher: '人民邮电出版社',
		price: 48
	}),
	new Book({
		picture: 'https://img10.360buyimg.com/n1/s200x200_jfs/t1/119119/28/16355/390609/5f4870aaE11ee9a70/a3942abebcb6534a.jpg',
		title: 'JavaScript 高级程序设计（第 4 版）',
		author: '[美] 马特·弗里斯比（Matt Frisbie）著 ',
		publisher: '人民邮电出版社',
		price: 49
	}),
	new Book({
		picture: 'https://img10.360buyimg.com/n1/s200x200_jfs/t1/119119/28/16355/390609/5f4870aaE11ee9a70/a3942abebcb6534a.jpg',
		title: 'JavaScript 高级程序设计（第 4 版）',
		author: '[美] 马特·弗里斯比（Matt Frisbie）著 ',
		publisher: '人民邮电出版社',
		price: 50
	}),
	
]

mongoose.connect('mongodb://localhost:27017/bookstore')

Book.insertMany(books)
	.then((mongooseDocument) => {
		console.log('inserted ...')
	}).catch(err => {
		console.log(err)
	}).finally(() => {
		mongoose.disconnect()
	})
