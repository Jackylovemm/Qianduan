<template>
	<div id="app">
		
		<Header></Header>
		<!-- <LeftNav></LeftNav> -->
		<div id="CenterContent">
			<div id="leftNav">
				<Container></Container>
			</div>
			<div id="rightContent">
				<router-view></router-view>
			</div>
		</div>

	</div>
</template>

<script>
	// import axios from 'axios'
	// import Book from './components/Book.vue'
	// import LoginForm from './components/LoginForm.vue'
	
	// import LeftNav from './components/LeftNav.vue'
	import Header from './components/Header.vue'
	import Container from './components/Container.vue'
	export default {
		name: 'App',
		components: {
			Header,
			Container
		},
		data() {
			return {
				// books: []
			}
		},
		mounted() {

			// let a = this
			// axios.get('api1/books')
			// 	.then(res => {
			// 		a.books = res.data
			// 	})
			// 	.catch(err => {
			// 		console.log(err)
			// 	})
		}
	}
</script>
<style>
	#CenterContent {
		display: flex;
	}

	#leftNav {
		flex: 1;
		border-right: 1px solid black;
		margin-right: 40px;
	}

	#rightContent {
		flex: 5;
		display: flex;
		align-content: center;
		justify-content: center;
	}
</style>
