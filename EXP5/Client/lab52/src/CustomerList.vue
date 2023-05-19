<template>

	<div class="container-fluid my-3">
		<div class="alert alert-info" style="color: black; font-weight: 700;">目前所在位置:客户信息管理</div>
		<hr>
		<form class="needs-validation" novalidate>

			<div class="row align-items-end">
<!-- 输入查询 : CName  CAddress  CQQ CPhone-->
				<div class="col-md-2 mb-1">
					<label for="CName">姓名</label>
					<input type="text" class="form-control" id="CName" placeholder="张..." required>
					<div class="invalid-feedback">Valid CName no is required.</div>
				</div>
				
				<div class="col-md-2 mb-1">
					<label for="CAddress">地址</label>
					<input type="text" class="form-control" id="CAddress" placeholder="丰和南大道696号..." required>
					<div class="invalid-feedback">Valid CAddress no is required.</div>
				</div>
				
				<div class="col-md-2 mb-1">
					<label for="CQQ">QQ</label>
					<input type="text" class="form-control" id="CQQ" placeholder="2210...." required>
					<div class="invalid-feedback">Valid CQQ no is required.</div>
				</div>
				
				<div class="col-md-2 mb-1">
					<label for="CPhone">电话号码</label>
					<input type="text" class="form-control" id="CPhone" placeholder="150...." required>
					<div class="invalid-feedback">Valid CPhone no is required.</div>
				</div>
				

				<div class="col-md-3 mb-3">
					<button type="button" class="btn btn-primary" @click="search" id="btn_search">
						查询顾客
					</button>
					<!-- Button trigger modal -->
					<button type="button" class="btn btn-primary" data-toggle="modal" id="btn_add"
						data-target="#staticBackdrop">
						新增顾客
					</button>
					
					<!-- Modal -->
					<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false"
						tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="staticBackdropLabel">请输入顾客信息</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
					
									<form>
										<!-- 顾客名 -->
										<!-- 确认添加: CNameAdd CAddressAdd  CSexAdd CQQAdd CPhoneAdd-->
										<div class="form-group row">
											<label for="CNameAdd" class="col-sm-2 col-form-label">姓名:</label>
											<div class="col-sm-10">
												<input type="text" class="form-control" id="CNameAdd" placeholder="张..."
													required>
												<div class="invalid-feedback">Valid CNameAdd no is required.</div>
											</div>
										</div>
										<!-- 顾客所在地址 -->
										<div class="form-group row">
											<label for="CAddressAdd" class="col-sm-2 col-form-label">地址:</label>
											<div class="col-sm-10">
												<input type="text" class="form-control" id="CAddressAdd"
													placeholder="丰和南大道696号...." required>
											</div>
										</div>
					
										<!-- 性别 -->
										<div class="form-group row">
											<label for="CSexAdd" class="col-sm-2 col-form-label">性别:</label>
											<div class="col-sm-10">
												<!-- <input type="" class="form-control" id="bookAuthorAdd"
													placeholder="马特.佛利斯..." required> -->
												<select class="custom-select" id="CSexAdd">
													<option selected>请选择性别</option>
													<option value="男">男</option>
													<option value="女">女</option>
												</select>
												<!-- <div class="input-group-append">
													<label class="input-group-text"
														for="CSexAdd">Options</label>
												</div> -->
											</div>
										</div>
					
										<!-- QQ号码 -->
										<div class="form-group row">
											<label for="CQQAdd" class="col-sm-2 col-form-label">QQ号:</label>
											<div class="col-sm-10">
												<input type="text" class="form-control" id="CQQAdd"
													placeholder="2210..." required>
											</div>
										</div>
					
										<!-- 电话号码 -->
										<div class="form-group row">
											<label for="CPhoneAdd" class="col-sm-2 col-form-label">电话号码</label>
											<div class="col-sm-10">
												<input type="text" class="form-control" id="CPhoneAdd"
													placeholder="150...." required>
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
					<!-- Modal -->
					
				</div>

			</div>

		</form>

		<hr>

		<table id="bookTable" class="table">
			<thead>
				<tr>
					<th class="px-5" scope="col">姓名</th>
					<th class="px-5" scope="col">地址</th>
					<th class="px-5" scope="col">性别</th>
					<th class="px-5" scope="col">QQ号</th>
					<th class="px-5" scope="col">联系方式</th>
					<th class="px-5" scope="col">操作</th>
				</tr>
			</thead>

			<tbody id="mainContent">
				<tr v-for="Customer in Customers" :key="Customer">
					<td>{{Customer.CName}}</td>
					<td>{{Customer.CAddress}}</td>
					<td>{{Customer.CSex}}</td>
					<td>{{Customer.CQQ}}</td>
					<td>{{Customer.CPhone}}</td>
					
					<td>
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
							data-toggle="dropdown" aria-expanded="false">
							操作
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="#" data-toggle="modal" data-target="#DeleteBackdrop"
								@click="bindDelete(Customer._id)">删除</a>
							<a class="dropdown-item" href="#" data-toggle="modal" data-target="#ModifyBackdrop"
								@click="bindUpdate(Customer._id)">修改</a>
						</div>

						<!-- Modal -->
						<div class="modal fade" id="DeleteBackdrop" data-backdrop="static" data-keyboard="false"
							tabindex="-1" aria-labelledby="DeleteBackdropLabel" aria-hidden="true">
							<div class="modal-dialog">
								<div class="modal-content">

									<div class="modal-header">
										<h5 class="modal-title">删除用户信息</h5>
										<button type="button" class="btn-close" data-bs-dismiss="modal"
											aria-label="Close"></button>
									</div>

									<div class="modal-body">
										是否确认删除相应用户信息?
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
										<h5 class="modal-title" id="ModifyBackdropLabel">请输入修改后的用户信息</h5>
										<button type="button" class="close" data-dismiss="modal" ariua-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">

										<form>
											<!-- 姓名 -->
											<!-- CNameUpdate CAddressUpdate CSexUpdate CQQUpdate CPhoneUpdate-->
											<div class="form-group row">
												<label for="CNameUpdate" class="col-sm-2 col-form-label">姓名:</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="CNameUpdate"
														placeholder="张...." required>
													<div class="invalid-feedback">Valid CName no is required.</div>
												</div>
											</div>
											<!-- 顾客所在地址 -->
											<div class="form-group row">
												<label for="CAddressUpdate"
													class="col-sm-2 col-form-label">地址</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="CAddressUpdate"
														placeholder="丰和南大道696..." required>
												</div>
											</div>

											<!-- 顾客性别 -->
											<div class="form-group row">
												<label for="CSexUpdate" class="col-sm-2 col-form-label">性别</label>
												<div class="col-sm-10">
													<!-- <input type="text" class="form-control" id="CSexUpdate"
														placeholder="马特.佛利斯..." required> -->
														
															<!-- <input type="" class="form-control" id="bookAuthorAdd"
																placeholder="马特.佛利斯..." required> -->
															<select class="custom-select" id="CSexUpdate">
																<option selected>请选择性别</option>
																<option value="男">男</option>
																<option value="女">女</option>
															</select>
													
												</div>
											</div>

											<!-- QQ -->
											<div class="form-group row">
												<label for="CQQUpdate"
													class="col-sm-2 col-form-label">QQ</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="CQQUpdate"
														placeholder="2210..." required>
												</div>
											</div>

											<!-- 电话 -->
											<div class="form-group row">
												<label for="CPhoneUpdate" class="col-sm-2 col-form-label">电话</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" id="CPhoneUpdate"
														placeholder="150..." required>
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

	</div>


</template>

<script>
	import axios from 'axios'

	export default {
		name: 'CustomerList',
		data() {
			return {
				Customers:[],
				receive: {},
				bindDeleteID: '',
				addReceive: {},
				bindUpdateID: '',
				ReShowAddCustomer: {}
			}
		},
		mounted() {
			let a = this
			axios.get('api1/customers')
			.then(res=>{
				a.Customers = res.data
			}).catch(err => {
				console.log(err)
			})
		},
		methods: {

			//绑定删除ID
			bindDelete(e) {
				this.bindDeleteID = e
			},
			//绑定更新ID
			bindUpdate(e) {

				this.bindUpdateID = e

				// 拿着这个id去查数据
				axios.get(`api1/customerSearchByID?c_id=${this.bindUpdateID}`)
					.then(res => {
						//得到值之后进行赋值
						//数据回显
						// <!-- CNameUpdate CAddressUpdate CSexUpdate CQQUpdate CPhoneUpdate-->
						document.getElementById('CNameUpdate').value = `${res.data[0].CName}`
						document.getElementById('CAddressUpdate').value = `${res.data[0].CAddress}`
						document.getElementById('CSexUpdate').value = `${res.data[0].CSex}`
						document.getElementById('CQQUpdate').value = `${res.data[0].CQQ}`
						document.getElementById('CPhoneUpdate').value = `${res.data[0].CPhone}`
					})
					.catch(err => {
						console.log(err)
					})


			},

			checkUpdate() {

				let CNameUpdate = document.getElementById('CNameUpdate').value
				let CAddressUpdate = document.getElementById('CAddressUpdate').value
				let CSexUpdate = document.getElementById('CSexUpdate').value
				let CQQUpdate = document.getElementById('CQQUpdate').value
				let CPhoneUpdate = document.getElementById('CPhoneUpdate').value

				//获取之后将数据传过去
				axios.get(`api1/customersUpdate?CNameUpdate=${CNameUpdate}&CAddressUpdate=${CAddressUpdate}
				&CSexUpdate=${CSexUpdate}&CQQUpdate=${CQQUpdate}
				&CPhoneUpdate=${CPhoneUpdate}&c_id=${this.bindUpdateID}`)
					.then((res) => {
						alert('更新成功!' + res)
						this.$router.go(0)
					}).catch(err => {
						console.log(err)
					})

			},
			//确认删除
			del(e) {

				axios.get(`api1/customersDelete?c_id=${e}`)
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
// <!-- 输入查询 : CName  CAddress  CQQ CPhone-->
				let CName = document.getElementById('CName').value
				let CAddress = document.getElementById('CAddress').value
				let CQQ = document.getElementById('CQQ').value
				let CPhone = document.getElementById('CPhone').value

				// 做查询工作
				axios.get(`api1/customersSearch?CName=${CName}&CAddress=${CAddress}
				&CQQ=${CQQ}&CPhone=${CPhone}`)
					.then((res) => {
						a.Customers = res.data
					}).catch(err => {
						console.log(err)
					})

			},
			modify(e) {
				alert('修改' + e)
			},
			checkAdd() {

				// 	<!-- 确认添加: CNameAdd CAddressAdd  CSexAdd CQQAdd CPhoneAdd-->
				let CNameAdd = document.getElementById('CNameAdd').value
				let CAddressAdd = document.getElementById('CAddressAdd').value
				let CSexAdd = document.getElementById('CSexAdd').value
				let CQQAdd = document.getElementById('CQQAdd').value
				let CPhoneAdd = document.getElementById('CPhoneAdd').value
				
				let addInfo = {
					CNameAdd:CNameAdd,
					CAddressAdd:CAddressAdd,
					CSexAdd:CSexAdd,
					CQQAdd:CQQAdd,
					CPhoneAdd:CPhoneAdd
				}
				
				this.ReShowAddCustomer = addInfo
				
				axios.get(`api1/customersAdd?CNameAdd=${CNameAdd}&CAddressAdd=${CAddressAdd}
				&CSexAdd=${CSexAdd}&CQQAdd=${CQQAdd}
				&CPhoneAdd=${CPhoneAdd}`)
					.then((res) => {
						this.addReceive = res.data
					}).catch(err => {
						console.log(err)
					}).finally(() => {
						alert('插入成功!')
						this.$router.go(0)
					})

			}


		},

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
