<template>

	<div class="container-fluid my-3">
		<div class="alert alert-info" style="color: black; font-weight: 700;">目前所在位置:订单信息管理</div>
		<hr>
		<form class="needs-validation" novalidate>

			<div class="row align-items-end">
<!-- 输入查询 : userName  address userContact -->
				<div class="col-md-2 mb-1">
					<label for="userName">姓名</label>
					<input type="text" class="form-control" id="userName" placeholder="张..." required>
					<div class="invalid-feedback">Valid CName no is required.</div>
				</div>

				<div class="col-md-2 mb-1">
					<label for="address">地址</label>
					<input type="text" class="form-control" id="address" placeholder="丰和南大道696号..." required>
					<div class="invalid-feedback">Valid address no is required.</div>
				</div>

				<div class="col-md-2 mb-1">
					<label for="userContact">联系方式</label>
					<input type="text" class="form-control" id="userContact" placeholder="2210...." required>
					<div class="invalid-feedback">Valid userContact no is required.</div>
				</div>

				<div class="col-md-3 mb-3">
					<button type="button" class="btn btn-primary" @click="search" id="btn_search">
						查询订单
					</button>
				</div>

			</div>

		</form>
	
		
		<hr>

		<table id="bookTable" class="table">
			<thead>
				<tr>
					<th class="px-5" scope="col">订单号</th>
					<th class="px-5" scope="col">姓名</th>
					<th class="px-5" scope="col">联系方式</th>
					<th class="px-5" scope="col">地址</th>
					<th class="px-5" scope="col">操作</th>
				</tr>
			</thead>

			<tbody id="mainContent">
				<tr v-for="Order in Orders" :key="Order">
					<td>{{Order._id}}</td>
					<td>{{Order.userName}}</td>
					<td>{{Order.userContact}}</td>
					<td>{{Order.address}}</td>
					
					<td>
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
							data-toggle="dropdown" aria-expanded="false">
							操作
						</a>
						
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="#" data-toggle="modal" data-target="#DeleteBackdrop"
								@click="bindDelete(Order._id)">删除</a>
							<!-- 这里是查看详情 方法名称修改了-->
							<a class="dropdown-item" href="#" data-toggle="modal" data-target="#ModifyBackdrop"
								@click="bindDetail(Order._id)">详情</a>
						</div>

						<!-- Modal -->
						<div class="modal fade" id="DeleteBackdrop" data-backdrop="static" data-keyboard="false"
							tabindex="-1" aria-labelledby="DeleteBackdropLabel" aria-hidden="true">
							<div class="modal-dialog">
								<div class="modal-content">

									<div class="modal-header">
										<h5 class="modal-title">删除信息</h5>
										<button type="button" class="btn-close" data-bs-dismiss="modal"
											aria-label="Close"></button>
									</div>

									<div class="modal-body">
										是否确认删除相应订单信息?
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
										<h5 class="modal-title" id="ModifyBackdropLabel">订单明细</h5>
										<button type="button" class="close" data-dismiss="modal" ariua-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<div class="Card" style="width: 18rem;">
											<div class="card-body">
												<h5 class="card-title">姓名:{{DetailOrder.userName}}</h5>
												
												<h6 class="card-subtitle mb-2 text-muted">联系方式:{{DetailOrder.userContact}}</h6>
												<h6 class="card-subtitle mb-2 text-muted">地址:{{DetailOrder.address}}</h6>
												<p class="card-text">购买时间:{{DetailOrder.time}}</p>
											</div>
										</div>
										
										<div class="list-group">
																					
											<a href="#" v-for="good in goodsArray" v-bind:key='good' class="list-group-item list-group-item-action" style="text-decoration: none;">
												<div class="d-flex w-100 justify-content-between active">
													<h5 class="mb-1">书名:{{good.goodsName}}</h5>
													<small>数量:{{good.nums}}</small>
													
												</div>
												<p class="mb-1">单价:{{good.unitPrice}}</p>
											</a>
											<hr>
											<h4 class="mb-1" >总价:{{totalCount}}</h4>
										</div>
									</div>

									<div class="modal-footer">
										<!-- 查看明细 -->
										<button type="button" class="btn btn-primary" data-dismiss="modal">关闭</button>
									</div>

								</div>
							</div>
						</div>
						<!-- Modal弹窗内容 -->

					</td>


				</tr>

			</tbody>
		</table>
		

	</div>


</template>

<script>
	import axios from 'axios'

	export default {
		name: 'Order',
		data() {
			return {
				Orders:[],
				bindDeleteID: '',
				bindUpdateID: '',
				DetailOrder:{},
				goodsArray:[],
				totalCount:0,
			}
		},
		mounted() {
			let a = this
			axios.get('api1/orders')
			.then(res=>{
				a.Orders = res.data
			}).catch(err => {
				console.log(err)
			})
		},
		methods: {

			//绑定删除ID
			bindDelete(e) {
				this.bindDeleteID = e
			},
			//绑定详情ID 并且进行一些计算,来显示各个需要的数据
			
			bindDetail(e) {

				this.bindUpdateID = e

				// 拿着这个id去查数据
				axios.get(`api1/ordersSearchByID?o_id=${this.bindUpdateID}`)
					.then(res => {
						//得到值之后进行赋值				
						// 数据捕捉
						this.DetailOrder = res.data[0]
						// 获取商品列表
						this.goodsArray = this.DetailOrder.goods
					
						// 获取总价结果
						this.totalCount = this.Count(this.DetailOrder.goods)
						
						alert('查询成功!')
					})
					.catch(err => {
						console.log(err)
					})


			},
			// 计算总价
			Count(goods){
				
				let count = 0
				
				for(let i = 0;i<goods.length; i++){
					count += goods[i].unitPrice * goods[i].nums
				}
				// 返回计算结果
				return count
				
			},
			
			
			//确认删除
			del(e) {

				axios.get(`api1/ordersDelete?o_id=${e}`)
					.then((response) => {
						alert('删除完毕' + response)
						this.$router.go(0)
					}).catch(err => {
						console.log(err)
					})
			},
			search() {
				let a = this
// <!-- 输入查询 : userName  address userContact -->
				let userName = document.getElementById('userName').value
				let address = document.getElementById('address').value
				let userContact = document.getElementById('userContact').value

				// 做查询工作
				axios.get(`api1/ordersSearch?userName=${userName}&address=${address}
				&userContact=${userContact}`)
					.then((res) => {
						a.Orders = res.data
					}).catch(err => {
						console.log(err)
					})

			}
			
		}

	}
</script>

<style>
	#btn_search {
		margin-left: 60px;
	}

	#btn_add {
		margin-left: 60px;
	}
</style>
