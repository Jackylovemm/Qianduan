<template>

	<div class="container-fluid my-3">
		<div class="alert alert-info">目前所在位置:图书信息管理</div>
		<hr>
		<form class="needs-validation" novalidate>

			<div class="row align-items-end">

				<div class="col-md-3 mb-3">
					<label for="bookTitle">书名</label>
					<input type="text" class="form-control" id="bookTitle" placeholder="JavaSctipt" required>
					<div class="invalid-feedback">Valid bookTitle no is required.</div>
				</div>

				<div class="col-md-3 mb-3">
					<label for="bookPublisher">出版社</label>
					<input type="text" class="form-control" id="bookPublisher" placeholder="人民邮电出版社" required>
					<div class="invalid-feedback">Valid bookPublisher no is required.</div>
				</div>

				<div class="col-md-3 mb-3">
					<button type="button" class="btn btn-primary" @click="search" id="btn_search">
						查询图书
					</button>
					<!-- Button trigger modal -->
					<button type="button" id="btn_add" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
						新增图书
					</button>

					<!-- Modal -->
					<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false"
						tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="staticBackdropLabel">请输入图书信息</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">

									<form>
										<!-- 书名 -->
										<div class="form-group row">
											<label for="bookTitleAdd" class="col-sm-2 col-form-label">书名:</label>
											<div class="col-sm-10">
												<input type="text" class="form-control" id="bookTitleAdd"
													placeholder="书本全称..." required>
												<div class="invalid-feedback">Valid bookTitle no is required.</div>
											</div>
										</div>
										<!-- 书本图片url地址 -->
										<div class="form-group row">
											<label for="bookPictureAdd" class="col-sm-2 col-form-label">图片url地址</label>
											<div class="col-sm-10">
												<input type="text" class="form-control" id="bookPictureAdd"
													placeholder="https://img..." required>
											</div>
										</div>

										<!-- 书本作者名称 -->
										<div class="form-group row">
											<label for="bookAuthorAdd" class="col-sm-2 col-form-label">作者</label>
											<div class="col-sm-10">
												<input type="text" class="form-control" id="bookAuthorAdd"
													placeholder="马特.佛利斯..." required>
											</div>
										</div>

										<!-- 书本出版社 -->
										<div class="form-group row">
											<label for="bookPublisherAdd" class="col-sm-2 col-form-label">出版社</label>
											<div class="col-sm-10">
												<input type="text" class="form-control" id="bookPublisherAdd"
													placeholder="人民邮电出版社..." required>
											</div>
										</div>

										<!-- 书本价格 -->
										<div class="form-group row">
											<label for="bookPriceAdd" class="col-sm-2 col-form-label">价格</label>
											<div class="col-sm-10">
												<input type="text" class="form-control" id="bookPriceAdd"
													placeholder="50" required>
											</div>
										</div>

									</form>

								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
									<button type="button" class="btn btn-primary" data-dismiss="modal"
										@click="checkAdd">保存添加</button>
								</div>
							</div>
						</div>
					</div>

				</div>

			</div>

		</form>

		<hr>

		<table id="bookTable" class="table table-striped table-sm table-hover">
			<thead class="thead-dark">
				<tr style="background-color: black; color: white;">
					<th class="px-5">书名</th>
					<th class="px-5">图片</th>
					<th class="px-5">作者</th>
					<th class="px-5">出版社</th>
					<th class="px-5">价格</th>
					<th class="px-5">操作</th>
				</tr>
			</thead>

			<tbody id="mainContent">
				<tr v-for="book in books" :key="book">
					<td>{{book.title}}</td>
					<td>
						<img :src="book.picture" style="width: 90px; height: 90px;">

					</td>
					<td>{{book.author}}</td>
					<td>{{book.publisher}}</td>
					<td>{{book.price}}</td>
					<td>
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
							data-toggle="dropdown" aria-expanded="false">
							操作
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="#" data-toggle="modal" data-target="#DeleteBackdrop"
								@click="bindDelete(book._id)">删除</a>
							<a class="dropdown-item" href="#" data-toggle="modal" data-target="#ModifyBackdrop"
								@click="bindUpdate(book._id)">修改</a>
						</div>

						<!-- Modal -->
						<div class="modal fade" id="DeleteBackdrop" data-backdrop="static" data-keyboard="false"
							tabindex="-1" aria-labelledby="DeleteBackdropLabel" aria-hidden="true">
							<div class="modal-dialog">
								<div class="modal-content">

									<div class="modal-header">
										<h5 class="modal-title">删除图书信息</h5>
										<button type="button" class="btn-close" data-bs-dismiss="modal"
											aria-label="Close"></button>
									</div>

									<div class="modal-body">
										是否确认删除相应图书信息?
									</div>

									<div class="modal-footer">
										<button type="button" class="btn btn-primary" data-dismiss="modal"
											@click="del(bindDeleteID)">确认删除</button>
										<button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
									</div>

								</div>
							</div>
						</div>
						<!-- 这里对应dropdown-meunu的div -->

						<!-- 这里以上都是div的内容 -->
						<div class="modal fade" id="ModifyBackdrop" data-backdrop="static" data-keyboard="false"
							tabindex="-1" aria-labelledby="ModifyBackdropLabel" aria-hidden="true">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="ModifyBackdropLabel">请输入修改后的图书信息</h5>
										<button type="button" class="close" data-dismiss="modal" ariua-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">

										<form>
											<!-- 书名 -->
											<!-- bookTitleUpdate bookPictureUpdate bookAuthorUpdate bookPublisherUpdate bookPriceUpdate-->
											<div class="form-group row">
												<label for="bookTitleUpdate" class="col-sm-2 col-form-label">书名:</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="bookTitleUpdate"
														placeholder="书本全称..." required>
													<div class="invalid-feedback">Valid bookTitle no is required.</div>
												</div>
											</div>
											<!-- 书本图片url地址 -->
											<div class="form-group row">
												<label for="bookPictureUpdate"
													class="col-sm-2 col-form-label">图片url地址</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="bookPictureUpdate"
														placeholder="https://img..." required>
												</div>
											</div>

											<!-- 书本作者名称 -->
											<div class="form-group row">
												<label for="bookAuthorUpdate" class="col-sm-2 col-form-label">作者</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="bookAuthorUpdate"
														placeholder="马特.佛利斯..." required>
												</div>
											</div>

											<!-- 书本出版社 -->
											<div class="form-group row">
												<label for="bookPublisherUpdate"
													class="col-sm-2 col-form-label">出版社</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="bookPublisherUpdate"
														placeholder="人民邮电出版社..." required>
												</div>
											</div>

											<!-- 书本价格 -->
											<div class="form-group row">
												<label for="bookPriceUpdate" class="col-sm-2 col-form-label">价格</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="bookPriceUpdate"
														placeholder="50" required>
												</div>
											</div>

										</form>

									</div>

									<div class="modal-footer">
										<button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
										<button type="button" class="btn btn-primary" data-dismiss="modal"
											@click="checkUpdate(bindUpdateID)">保存修改</button>
									</div>

								</div>
							</div>
						</div>
						<!-- Modal弹窗内容 -->

					</td>


				</tr>

			</tbody>
		</table>
		<p>{{bindDeleteID}}</p>
	</div>


</template>

<script>
	import axios from 'axios'

	export default {
		name: 'BookList',
		data() {
			return {
				books: [],
				receive: {},
				bindDeleteID: '',
				addReceive: {},
				bindUpdateID: '',
				ReShowBook: {}
			}
		},
		mounted() {
			let a = this
			axios.get('api1/books')
				.then(res => {
					a.books = res.data
				})
				.catch(err => {
					console.log(err)
				})
		},
		methods: {

			//绑定删除号码
			bindDelete(e) {
				this.bindDeleteID = e
			},
			//绑定更新号码
			bindUpdate(e) {
				let a = this

				this.bindUpdateID = e

				// 拿着这个id去查数据
				axios.get(`api1/booksSearchByID?book_id=${this.bindUpdateID}`)
					.then(res => {
						a.ReShowBook = res.data
						//得到值之后进行赋值
						//数据回显
						document.getElementById('bookTitleUpdate').value = `${res.data[0].title}`
						document.getElementById('bookPictureUpdate').value = `${res.data[0].picture}`
						document.getElementById('bookAuthorUpdate').value = `${res.data[0].author}`
						document.getElementById('bookPublisherUpdate').value = `${res.data[0].publisher}`
						document.getElementById('bookPriceUpdate').value = `${res.data[0].price}`
					})
					.catch(err => {
						console.log(err)
					})
			

			},

			checkUpdate() {
			
				let bookTitleUpdate = document.getElementById('bookTitleUpdate').value
				let bookPictureUpdate = document.getElementById('bookPictureUpdate').value
				let bookAuthorUpdate = document.getElementById('bookAuthorUpdate').value
				let bookPublisherUpdate = document.getElementById('bookPublisherUpdate').value
				let bookPriceUpdate = document.getElementById('bookPriceUpdate').value
			
				//获取之后将数据传过去
				axios.get(`api1/booksUpdate?bookTitleUpdate=${bookTitleUpdate}&bookPictureUpdate=${bookPictureUpdate}
				&bookAuthorUpdate=${bookAuthorUpdate}&bookPublisherUpdate=${bookPublisherUpdate}
				&bookPriceUpdate=${bookPriceUpdate}&book_id=${this.bindUpdateID}`)
					.then((res) => {
						alert('更新成功!' + res)
						this.$router.go(0)
					}).catch(err => {
						console.log(err)
					})
			
			},
			//确认删除
			del(e) {
				
				axios.get(`api1/booksDelete?book_id=${e}`)
					.then((response) => {
						alert('删除完毕' + response)
						//删除完毕后刷新页面
						this.$router.go(0)
					}).catch(err => {
						console.log(err)
					})
			},

			add() {
				alert('新增')
			},
			search() {
				let a = this

				let bookTitle = document.getElementById('bookTitle').value
				let bookPublisher = document.getElementById('bookPublisher').value

				// 做查询工作
				axios.get(`api1/booksSearch?bookTitle=${bookTitle}&bookPublisher=${bookPublisher}`)
					.then((res) => {
						a.books = res.data
					}).catch(err => {
						console.log(err)
					})

			},
			modify(e) {
				alert('修改' + e)
			},
			checkAdd() {

				// bookTitleAdd  bookPictureAdd bookAuthorAdd bookPublisherAdd bookPriceAdd
				let bookTitleAdd = document.getElementById('bookTitleAdd').value
				let bookPictureAdd = document.getElementById('bookPictureAdd').value
				let bookAuthorAdd = document.getElementById('bookAuthorAdd').value
				let bookPublisherAdd = document.getElementById('bookPublisherAdd').value
				let bookPriceAdd = document.getElementById('bookPriceAdd').value

				axios.get(`api1/booksAdd?bookTitleAdd=${bookTitleAdd}&bookPictureAdd=${bookPictureAdd}
				&bookAuthorAdd=${bookAuthorAdd}&bookPublisherAdd=${bookPublisherAdd}
				&bookPriceAdd=${bookPriceAdd}`)
					.then((res) => {
						this.addReceive = res.data
					}).catch(err => {
						console.log(err)
					}).finally(()=>{
						alert('插入成功!')
						this.$router.go(0)
					})

			}
			

		},

	}
</script>

<style>

	#btn_search{
		margin-left: 60px;
	}
	
	#btn_add{
		margin-left: 60px;
	}

</style>
