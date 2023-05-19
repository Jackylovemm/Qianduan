<template>
	<div id="app">
		<div class="jumbotron" id="Content">
			<h1 class="display-4">Hello Administrator!!</h1>
			<p class="lead">Welcome to the Online BookStore Management System</p>
			<hr class="my-4">
			<p>← Start your Management from the left Items ←</p>
			<p>
				
				网上书城是一种全新的电子商务模式，人们可以通过网络和计算机实现购买图书的需求。这种全新的消费方式为商家带来了销售及宣传的新思路。商家可通过网上书城发布现有图书的信息，同时处理消费者的订单，与消费者沟通交流，最后安排发货。不仅有利于消费者节省时间，也为商家拓展了销售渠道。本次研究设计的网上书城使用了前端技术,使用Express框架,vue,node.js联合Mongodb(非关系型数据库),视图框架使用Bootstrap与Bootstrap-vue进行快速美观的搭建,实现了网上购书平台的后台数据搭建,更方便的对书本,订单,用户等数据进行管理。
				</p>
					<p>随着信息时代的到来，各行各业的工作模式发生了翻天覆地的变化，越来越多的商家加入线上购物服务，以期打开更大的销售市场，书店也不例外1.过去消费者想要购买图书图需要去实体书店挑选，而书店的种类多无法在短时间内找到自己心仪的书籍，且大部分图书的价格不够透明，消费者多是被动购买，消费体验相对较差。线上购物网的流行让实体书店面临了巨大的挑战，寻求新的销售方式迫在眉睫。本次研究目的是为消费者购买书籍提供方便，提高全民读书率。商家可以通过后台更加轻松的管理书籍资源;消费者可以随时随地通过网站浏览购买自己喜欢的书，价格更加透明，充分提高了消费体验。
			</p>
					
					<p>实现过程:首先是对书城管理系统进行一个整体的需求分析,对所出现的Entity和Relationship进行业务建模,构建出相应在数据库中存储的模式,在代码中的实现即为,Schema模型,并在Xxx_db_init.js文件中对相应的数据库进行数据初始化,在Server端的配置还有对应的路由进行的数据操作例如// 查询所有订单
				app.get('/orders',(req,res)=>{
					Order.find()
						.then((orders)=>{
							res.send(orders)
						})
				}),当客户端访问服务端监听端口下的/orders路径时(使用axios.get(‘url’对服务端的操作数据进行访问)),服务端对相应数据库进行查询操作,此例中的操作是查询Order集合中的所有数据,再通过res.send进行返回,那么在客户端只需要通过				axios.get(`api1/ordersSearchByID?o_id=${this.bindUpdateID}`)
									.then(res => {
										//得到值之后进行赋值				
										// 数据捕捉
										this.DetailOrder = res.data[0]
										.....
										alert('查询成功!')
									})
									.catch(err => {
										console.log(err)
									})在then之后的操作,res就是访问相应路由后反馈的数据,,当客户端需要进行数据操作时候,分别访问不同的路由,路由请求从客户端发送之后,服务端捕捉到相应路由路径并进行数据操作反馈,前端只需要向用户反馈数据结果即可;
	</p>							
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Main',

		data() {
			return {

			}
		},
	}
</script>
<style>
	
	#Content{
		margin-top: 40px;
	}

</style>
