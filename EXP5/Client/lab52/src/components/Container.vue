<template>

	<nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
		<div class="sidebar-sticky pt-3">
			<ul class="nav flex-column">
				
				<li class="nav-item">
					<router-link to="/Main">
						<a class="nav-link active" href="#">
							<span data-feather="home">
							</span>
							MainParagrah
							<span class="sr-only">(current)</span>
						</a>
					</router-link>
				</li>
				
				<li class="nav-item">
					<router-link to="/BookList">
						<a class="nav-link" href="#">
							<span data-feather="file"></span>
							<!-- 书本信息管理 -->
							BookInfoManagement
						</a>
					</router-link>

				</li>
				<li class="nav-item">
					<router-link to="/CustomerList">
						<a class="nav-link" href="#">
							<span data-feather="shopping-cart"></span>
							<!-- 客户信息管理 -->
							CustomerInfoManagement
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/Order">
						<a class="nav-link" href="#">
							<span data-feather="users"></span>
							<!-- 订单信息管理 -->
							OrderInfoManagement
						</a>
					</router-link>
				</li>
			</ul>

		
		</div>
	</nav>


</template>

<script>
	export default {
		name: 'Container'
	}
</script>

<style>
	.bd-placeholder-img {
		font-size: 1.125rem;
		text-anchor: middle;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
</style>
