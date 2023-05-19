<template>
	<div class="card" style="width: 18rem;" >
		<img :src='book.picture' class="card-img-top">
		<div class="card-body" >
			<h3 class="card-title">{{book.title}}</h3>
			<p class="card-text">{{book.author}}</p>
			<i class="fa fa-cny fa-lg" style="color: red; font-weight: 600;">{{book.price}}</i> 
			<a href="#" class="btn btn-primary" style="margin-left: 40px;">购买</a>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Book',
		props: ["book"]
	};
</script>

<style scoped>
</style>
