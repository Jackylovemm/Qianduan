<template>
	<form class="form-signin">
		<!-- <img class="mb-4" src="bootstrap-solid.svg" alt="" width="72" height="72"> -->
		<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
		<label for="inputAccount" class="sr-only">inputAccount</label>
		<input type="text" id="inputAccount" v-model="userAccount" class="form-control" placeholder="input Account"
			required autofocus>
		<label for="inputPassword" class="sr-only">Password</label>
		<input type="password" id="inputPassword" v-model="passWord" class="form-control" placeholder="input Password"
			required>
			
				<button class="btn btn-lg btn-primary btn-block" type="button" @click="greet">Sign in</button>
		
		<!-- <button class="btn btn-lg btn-primary btn-block" type="submit" @click="greet">Sign in</button> -->
		<p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
		<p>userAccount:{{userAccount}}----passWord:{{passWord}}</p>
		<!-- <p>核对正确:{{checkRes}}</p> -->
		<p>response数据:{{response}}</p>
		<p>User数据:{{users}}</p>
	</form>

</template>

<script>
	import axios from 'axios'

	export default {

		name: 'LoginForm',
		data() {
			return {
				userAccount: '',
				passWord: '',
				response: {},
				users:{}
			}
		},
		methods: {
			
			// 确认登录
			greet(event) {

				alert('Hello' + event + '!')

				axios.get(`api1/users?userAccount=${this.userAccount}&passWord=${this.passWord}`)
					.then((response) => {
				
						this.response = response
						this.users = response.data.user
						
						if(this.users.length != 0){
							this.$router.push('/Main')
						}
						
					}).catch((error) => {
						// catch 指请求出错的处理
						console.log(error);
					});
					

			}
		}
	};
</script>

<style scoped>
	body {
		display: -ms-flexbox;
		display: -webkit-box;
		display: flex;
		-ms-flex-align: center;
		-ms-flex-pack: center;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: center;
		justify-content: center;
		padding-top: 40px;
		padding-bottom: 40px;
		background-color: #f5f5f5;
	}

	.form-signin {
		width: 100%;
		max-width: 330px;
		padding: 15px;
		margin: 0 auto;
	}

	.form-signin .checkbox {
		font-weight: 400;
	}

	.form-signin .form-control {
		position: relative;
		box-sizing: border-box;
		height: auto;
		padding: 10px;
		font-size: 16px;
	}

	.form-signin .form-control:focus {
		z-index: 2;
	}

	.form-signin input[type="email"] {
		margin-bottom: -1px;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}

	.form-signin input[type="password"] {
		margin-bottom: 10px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
</style>
