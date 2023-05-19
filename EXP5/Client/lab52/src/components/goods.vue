<template>
	<div>
		<p>反馈数据</p>
		<p>response数据:{{response}}</p>
		<p>书本列表</p>
		<p>books:{{book}}</p>
	</div>
	
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'goods',
		data() {
			return {
				response: {},
				book:[]
				// response: {}
			}
		},
		mounted() {
			this.greet()
		},
		methods: {

			greet() {
				let a = this
				axios.get('api1/books')
					.then(res => {
						a.response = res
						a.book = res.data
						// a.response = res
					})
					.catch(err => {
						console.log(err)
					})
			}
		}
	};
</script>

<style scoped>
</style>
