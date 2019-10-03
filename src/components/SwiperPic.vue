<template>
	<div class="holecon">
		<simplebar class="notes">
			<div class="eightpic">
				<div class="picitem" :style="{backgroundImage: top.url}" v-for="(top,index) in topswiper" :key="index">
					<div class="picitem-city"></div>
					<div class="city-name">
						<span class="cn-name">{{top.cnname}}</span>
					</div>
					<div class="py-city-name">
						<div class="py-name">
							{{top.pyname}}
						</div>
						<div class="explorebtn">
							<span class="plus plusltp tpplus">+</span>
							<span class="plus plusrtp tpplus">+</span>
							<span class="plus plusl">+</span>
							<span class="plus plusr">+</span>
							<button id="btn1" class="hidden-btn" style="display: inline-block; ">EXPLORE</button>
							<div class="grow-left">
								<div class="button"></div>
							</div>
						</div>
					</div>
				</div>	
			</div>
			<div class="eightpic">
				<div class="picitem" :style="{backgroundImage: down.url}" v-for="(down,index) in downswiper" :key="index">
					<div class="picitem-city"></div>
					<div class="city-name">
						<span class="cn-name">{{down.cnname}}</span>
					</div>
					<div class="py-city-name">
						<div class="py-name">
							{{down.pyname}}
						</div>
						<div class="explorebtn">
							<span class="plus plusltp tpplus">+</span>
							<span class="plus plusrtp tpplus">+</span>
							<span class="plus plusl">+</span>
							<span class="plus plusr">+</span>
							<button id="btn1" class="hidden-btn" style="display: inline-block; ">EXPLORE</button>
							<div class="grow-left">
								<div class="button"></div>
							</div>
						</div>
					</div>
				</div>	
			</div>
    </simplebar>
	</div>
</template>


<script>
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';


export default {
  components:{
    simplebar
  },
  data(){
  	return{
  		topswiper:[
	  		{url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/广州增城蔷薇国际.jpg)',cnname:'广州蔷薇花园',pyname:'QIANGWEI HUAYUAN'},
	  		{url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/广州常春藤-1.jpg)',cnname:'广州常春藤',pyname:'BOSTON IVY'},
	  		{url:'url(http://www.seedland.cc/wp/wp-content/uploads/2019/08/3e658b0fa85713ed7a6d47caeb276c6.jpg)',cnname:'永川蔷薇国际',pyname:'ROSA INTERNATIONAL'},
	  		{url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/惠州木槿雅著.jpg)',cnname:'惠州常春藤',pyname:'ROYAL IVY'},
	  	  {url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/惠州常春藤.jpg)',cnname:'惠州木槿雅',pyname:'RIVER ROSELLE'},
	  		{url:'url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/太原紫藤公馆.jpg)',cnname:'太原紫藤公馆',pyname:'THE WISTERIA'},
	  		{url:'url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/成都海棠名著.jpg)',cnname:'成都海棠名著',pyname:'BEGONIA WEAVE'},
	  		{url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/三亚海棠华著.jpg)',cnname:'三亚海棠华著',pyname:'CRYSTAL BAY'},
      ],
      downswiper:[
	  		{url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/昆明花鹤翎.jpg)',cnname:'昆明花鹤翎',pyname:'CAMILLIA RISE'},
	  		{url:'url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/天津海棠雅著.jpg)',cnname:'天津海棠雅著',pyname:'HOUSE OF BEGONIA'},
	  		{url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/深圳剑兰郡.jpg)',cnname:'深圳剑兰郡',pyname:'THE GLADIOLUS'},
	  		{url:'url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/遵义蔷薇国际.jpg)',cnname:'遵义蔷薇国际',pyname:'ROSE INTERNATIONAL GARDEN'},
	  		{url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/ORCHID-SHORE-Intro-2.jpg)',cnname:'武汉君兰汀岸',pyname:'ORCHID SHORE'},
	  		{url:'url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/无锡玫瑰庄园.jpg)',cnname:'无锡玫瑰庄园',pyname:'ROSE MANOR'},
	  		{url:'url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/中山璟湖城.jpg)',cnname:'中山璟湖城',pyname:'LAKEVIEW COMMUNITY'},
	  		{url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/六盘水紫藤庄园.jpg)',cnname:'六盘水紫藤庄园',pyname:'WISTERIA LAKE'},
  		]
  	}
  }
};
</script>

<style lang="less">
  .holecon{
  	width: 100%;
  	height: 100%;
  	.notes{
  		width: 100%;
  		height: 100%;  	
	  	.eightpic{
	  		display: flex;	
	  		justify-content: space-between;
	  		height: 50vh;
	  		width: 100vw;
	  		.picitem{
	  			position: relative;
	  			flex: none;
	  			background-color: #ddd;
	  			width: 25vw;
	  			height: 100%;
	  			background-size: cover;
	  			.picitem-city{
		  			display: block;
				    position: absolute;
				    width: 100%;
				    height: 50vh;
				    cursor: pointer;
				    transition: all 0.3s;
				    background: rgba(0,0,0,0.7) !important;
		  		}
		  		.picitem-city:hover{
		  			background: rgba(0,0,0,0.35) !important;
		  		}
		  		.city-name{
			  		color: #fff;
				    z-index: 1;
				    position: relative;
				    font-size: 15px;
				    display: block;
				    margin-left: 20px;
				    padding-top: 20px;
				    margin-right: 20px;
			  	  .cn-name{
			  	  	font-size: 20px;
			  	  }
			  	}
			  	.py-city-name{
			  		position: relative;
			  		.py-name{
			        position: absolute;
					    bottom: -25px;
					    left: 20px;
					    z-index: 1000;
					    letter-spacing: 2px;
					    font-size: 14px;
					    white-space: pre-line;
					    line-height: 25px;
					    color: #fff;
			  		}
			  		.explorebtn{
			  			position: absolute;
					    width: 125px;
					    right: 10%;
					    top: calc(50vh - 10vh);
					    .plus{
					    	color: #fff;
						    position: absolute;
						    z-index: 999;
						    transition: all, 1s;
					    }
					    .plusltp{
			          left: -5px;
			          bottom: -9px;

					    }
					    .plusrtp{
					    	right: -5px;
			          bottom: -9px; 
					    }
					    .plusl{
					    	left:-5px;
			          bottom: -9px;
			          margin-top: -33px!important;
			          z-index: 1000!important; 
					    }
					    .plusr{
					    	right: -5px;
			          bottom: -9px;
			          margin-top: -33px!important;
			          z-index: 1000!important;		          
					    }
					    .hidden-btn{
					    	position: relative;
						    z-index: 999;
						    font-size: 14px;
						    margin-top: -22px;
						    float: right;
						    width: 125px;
						    height: 33px;
						    padding-top: 6px;
						    padding-bottom: 6px;
						    color: #fff;
						    background-color: rgba(0,0,0,0.50);
						    cursor: pointer;
						    font-family: "DIN-Regular";
						    letter-spacing: 3px;
						    border: none;
						    opacity: 0;
					    }
					    .hidden-btn:before {
						    content: '';
						    position: absolute;
						    top: 0;
						    right: 0%;
						    width: 0%;
						    height: 100%;
						    border-top:1px solid white;
						    //animation: borderLineInWidth  1s linear;
						    transition: width 2s ;
						  }
						  .hidden-btn:after {
						    content: '';
						    position: absolute;
						    top: 0;
						    left: -1%;
						    width: 100%;
						    height: 0%;
						    border-right: 1px solid white;
						    border-left: 1px solid white;
						    //animation: borderLineInHeight 1s linear;
						    transition: height 2s ;
							}
							.hidden-btn:hover{
				        background-color: rgba(255, 251, 251, 0.7);
			        }
					    .grow-left{
					    	width: 125px;
					    	position: absolute;
					    	.button{
					    		display: block;
							    background-color: #fff;
							    transition: all, 0.5s;
							    transition-delay: 1s;
							    width: 125px!important;
							    position: absolute;
							    z-index: 999;
							    text-align: center;
							    margin-top: 10px;
							    height: 1px;
							    padding:0px;
					      }
				      }
		  		  } 
		  	  }
		  	} 
		  	.picitem:hover .plusl{
		  		transform: translateY(-33px);

		  	} 		
		  	.picitem:hover .plusr{
		  		transform: translateY(-33px);
		  	}
		  	.picitem:hover .plusrtp{
		  	  transform: rotateZ(360deg);
		  	}
		  	.picitem:hover .plusltp{
		  		transform: rotateZ(360deg);
		  	}
		  	.picitem:hover #btn1{
		  		opacity: 1;
		  	}
		  	.picitem:hover #btn1:before{
		  		width: 100%;
		  		
		  	}
		  	.picitem:hover #btn1:after{
		  		height: 100%;
		  	}
		  	.flexno{
		  		flex: none;	
		  	}
	  	}
  	}
  }
</style>