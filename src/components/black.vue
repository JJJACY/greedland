<template>
	<div class="black" >
		<div class="black-img">
			<img src="@/assets/x.png" @click="handleremove">
		</div>
		<div class="black-content">
			<ul class="black-navbar">
				<li class="black-item">
					<a href="javascript:;">主页</a>
					<span>HOME</span>
				</li>
				<li class="black-item">
					<a href="#about" @click="handleremove">关于实地</a>
					<span>ABOUT</span>
				</li>
				<li class="black-item">
					<a href="javascript:;">地产开发</a>
					<span>DEVELOPMENT</span>
				</li>
				<li class="black-item">
					<a href="javascript:;">最新消息</a>
					<span>LATER NEWS</span>
				</li>
				<li class="black-item">
					<a href="javascript:;">加入实地</a>
					<span>JION US</span>
				</li>
				<li class="black-item">
					<a href="javascript:;">廉洁举报</a>
					<span>WHISTEBLOWER</span>
				</li>
				<li class="black-item">
					<a href="javascript:;">联系我们</a>
					<span>CONTACT</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';
import exploremore from '@/components/exploremore.vue'


export default{
  name: 'Black',
  components:{

  },
  data(){
  	return{
  		check: 1,
  	}
  },
  props: {

  },
  components:{
    simplebar,
    exploremore,
  },
  methods:{
  	handleremove: function(){
  		this.$emit('fun',true)
  	}
  }
}
</script>

<style lang="less">
  .black{
    width: 100%;
    height: 100%;
  	.black-img{
  		position: absolute;
  		top: 40px;
  		right: 48px;
  		img{
  			width: 34px;
  		}
  	}
  	.black-content{
  		width: 300px;
  		height: 100vh;
  		position: absolute;
  		top: 70px;
  		right: 0;
  		.black-navbar{
  			width: 300px;
  		  height: 100vh;
  		}
  		li{
  			position: relative;
			  display: flex;
		    flex-direction: column;
  			color: #fff;
  			list-style: none;
  			padding-left: 10%;
  			margin-bottom: 20px;
  			border-left: 1px solid #fff;
  			a{
  				color: #fff;
  				text-decoration: none;
  			}
  			span{
  				margin-top: 8px;
  				font-size: 8px;
  			}
  		}
  		// li:before{
  		// 	content: '';
  		// 	display: block;
  		// 	width: 10%;
  		// 	position: absolute;
  		// 	left: -10%;
  		// 	top: 0;
  		// 	height: 44px;
  		// }
  	}
  }
  // .blackconblock{
  // 	display: 	block;
  // 	position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  // 	background: rgba(0, 0, 0, 0.85);
  // 	.black-img{
  // 		position: absolute;
  // 		top: 40px;
  // 		right: 48px;
  // 		img{
  // 			width: 34px;
  // 		}
  // 	}
  // 	.black-content{
  // 		width: 300px;
  // 		height: 100vh;
  // 		position: absolute;
  // 		top: 70px;
  // 		right: 0;
  // 		.black-navbar{
  // 			width: 300px;
  // 		  height: 100vh;
  // 		}
  // 		li{
  // 			position: relative;
		// 	  display: flex;
		//     flex-direction: column;
  // 			color: #fff;
  // 			list-style: none;
  // 			padding-left: 10%;
  // 			margin-bottom: 20px;
  // 			border-left: 1px solid #fff;
  // 			a{
  // 				color: #fff;
  // 				text-decoration: none;
  // 			}
  // 			span{
  // 				margin-top: 8px;
  // 				font-size: 8px;
  // 			}
  // 		}
  // 	}	
  // }
</style>