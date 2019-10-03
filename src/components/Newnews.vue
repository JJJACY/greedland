<template>
	<div class="newcon">
		<div class="hamburger">
			<img src="@/assets/hamburger.png">
		</div>
		<div class="clearf"></div>
		<div class="new">
			<h1 class="new-title">最新消息</h1>
			<h1 class="new-sub-title">LATEST NEWS</h1>
		</div>
		<div class="footer">
			<exploremore />
		</div>
	</div>
	
</template>

<script>
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';
import exploremore from '@/components/exploremore.vue'

export default {
  name: "Newnews",
  props: {

  },
  components:{
    simplebar,
    exploremore,
  },
  data(){
    return{
      adds: ['+',]
    }
  }
};
</script>

<style lang="less">
  .newcon{
  	position:relative;
  	padding-top: 3%;
    position: relative;
    padding-left: 5%;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.24);
    .hamburger{
    	float: right;
	    margin-right: 50px;
	    width: 50px;
	    height: 50px;
	    padding: 15px;
    	img{
    		width: 25px;
    	}
    }
    .hamburger:hover{
      opacity: 0.7;
      cursor: pointer;
    }
    .clearf{
    	clear: both;
    }
    .new{
    	position: absolute;
    	top: 50%;
    	left: 50%;
    	margin-top: 3%;
	    padding-left: 5%;
	    padding-right: 5%;
	    display: block;
	    width: 100%;
	    .new-title{
	    	font-size: 44px;
	    	color: #fff;
	    	font-weight: 100;
	    }
	    .new-sub-title{
	    	margin-top: 2%;
	    	font-size: 65px;
	    	color: #fff;
	    	line-height: 50px;
	    	font-weight: 100;
	    }
    }
    .footer{
    	position: absolute;
    	bottom: 80px;
    	right: 80px;
    }

  }
	
</style>
