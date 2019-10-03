<template>
	<div class="reportcon">
		<div class="hamburger">
			<img src="@/assets/hamburger.png">
		</div>
		<div class="clearf"></div>
		<div class="report">
			<h1 class="title">廉洁举报</h1>
			<h1 class="sub-title">WHISTLEBLOWER</h1>
		</div>
		<div class="find-more">
			<exploremore/>
		</div>
	</div>
	
</template>

<script>
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';
import exploremore from '@/components/exploremore.vue'	

export default{
  name: 'RePort',
  components:{
  	simplebar,
    exploremore,
  }

}
	
</script>

<style lang="less">
	.reportcon{
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
    .report{
    	position: absolute;
      top: 50%;
    	transform: translateY(-1%);
    	.title{
        font-size: 44px;
	    	color: #fff;
	    	font-weight: 100;
    	}
    	.sub-title{
    		margin-top: 2%;
	    	font-size: 65px;
	    	color: #fff;
	    	line-height: 50px;
	    	font-weight: 100;
    	}
    }
    .find-more{
    	position: absolute;
    	top: 50%;
    	right: 200px;
    	transform: translateY(50%);
    }
	}
</style>