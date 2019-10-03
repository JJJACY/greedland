<template>
	<div class="lastcon">
	  <div class="hamburger" @click="show = false">
			<img src="@/assets/hamburger.png">
		</div>
		<div class="clearf"></div>
		<div class="left">
			<div class="select-box">
				<select class="adress" id="choose" @click="choose">
					<option class="choose" v-for="(item,index) in items" :key="index" :value="item">{{item.company}}
					</option>
				</select>
				<div class="adress-phone" >
					<p class="city-adress" v-text="address"></p>
			    <p class="tel" v-text="tel"></p>
				</div>
			</div>
			<div class="logo">
				<img src="@/assets/logo-white.png">
			</div>
		</div>
		<div class="right">
			<ul>
				<li><a href="#about">关于实地 ABOUT</a></li>
				<li><a href="#development">地产开发 DEVELOPMENT</a></li>
				<li><a href="#news">最新消息 LATEST NEWS</a></li>
				<li><a href="#joinus">加入实地 JOIN US</a></li>
				<li><a href="#whistleblower">廉洁举报 WHISTLEBLOWER</a></li>
			</ul>
		</div>
		<div class="foot-info">
			<span>
				©2018 版权所有：广州实地房地产开发有限公司. <br>
        ALL RIGHTS RESERVED: GUANGZHOU SEEDLAND REAL ESTATE DEVELOPMENT CO., LTD.<br>
        粤ICP备13058296号<br>
			</span>
		</div>
		<div class="contact">
			<div>联系 CONTACT</div>
			<i class="down"></i>
		</div>
		<div :class="show ? 'show' : 'show blackcon'" >
			<Black @fun="change"/>
		</div>
		
	</div>
	
	
  
</template>

<script>
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';
import Black from '@/components/black.vue'


export default{
  name: 'LastPg',
  components:{
  	simplebar,
  	Black,
  },
  data(){
  	return{ 
  		items:[
  		{company:"实地地产(总部)",adress:"广州市天河区华夏路16号富力盈凯广场21楼",tel:"020-89192000"},
  		{company:"实地·广州常春藤",adress:"广州市黄埔区乔丰路与永和大道交汇处",tel:"020-26227888"},
  		{company:"实地·广州蔷薇国际",adress:"广州市广汕路21号线钟岗地铁站西侧",tel:"020-32636888"},
  		{company:"实地·天津海棠雅著",adress:"天津市津蓟区高速温泉城出口西侧500米",tel:"022-29208228"},
  		{company:"实地·武汉君兰汀岸",adress:"武汉汉阳经济技术开发区滨江带",tel:"027-83769888"},
  		{company:"实地·无锡玫瑰庄园",adress:"无锡市惠山区城铁国际商务区",tel:"0510-83256666"},
  		{company:"实地·惠州常春藤",adress:"惠州市惠阳区惠南大道旁",tel:"0752-3916888"},
  		{company:"实地·遵义蔷薇国际",adress:"遵义市新蒲新区播州大道与新蒲大道交叉路口",tel:"0851-28869999"},
  		{company:"实地·三亚海棠华著",adress:"三亚海棠区海棠北路18号（海棠广场北侧200米）",tel:"0898-88859999"},
  		{company:"实地·六盘水紫藤庄园",adress:"六盘水钟山区明湖路湿地公园旁",tel:"0858-8709888"},
  		{company:"实地·中山璟湖城",adress:"中山市火炬开发区博爱七路113号(麦当劳得来速餐厅旁)",tel:"0760-85280728"},
  		{company:"实地·昆明花鹤翎",adress:"昆明市五华区普吉路普吉立交东北侧200米",tel:"0871-64336666"},
  		{company:"实地·惠州木槿雅著",adress:"惠阳经济开发区御和路（淡水河岸",tel:"0752-3737111"},
  		{company:"实地·成都海棠名著",adress:"成都市青白江新城中心家乐福旁",tel:"028-83662666"}
  		],
  		address:'',
  		tel:'',
  		show: true
    }
  },
 methods:{
 	choose(){
 		let option = document.getElementById('choose');
 		let index=option.selectedIndex 
 		let adress = this.items[index].adress
 		let tel = this.items[index].tel
 		this.address = adress
 		this.tel = tel
 	},
 	change(data){
    this.show = data
 	}
 	//这里的data 就是子组件里的第二个参数
 }

}
</script>

<style lang="less">
  .lastcon{
  	position:relative;
  	padding-top: 3%;
    position: relative;
    padding-left: 5%;
    height: 100%;
    width: 100%;
    box-shadow: inset 0 -300px 196px rgba(0, 0, 0, 0.7);
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
    .left{
    	position: absolute;
	    display: block;
	    bottom: 35px;
	    left: 65px;
	    .select-box{
	    	.adress{
	    		position:relative;
	    		-webkit-appearance: none;
	    	  display: block;
			    width: 100%;
			    min-width: 350px;
			    height: 50px;
			    margin: 5px 0px;
			    padding: 0px 24px;
			    font-size: 16px;
			    line-height: 1.75;
			    color: #fff;
			    background-color: rgba(255,255,255,0);
			    border: 1px solid #cccccc;
	    	}
	    	.choose{
			    background-color: rgba(0,0,0,0.9);
	    	}
	    	.city-adress{
	    		margin: 40px 0 20px;
	    		font-size: 16px;
	    		line-height: 20px;
	    		color: #fff;
	    	}
	    	.tel{
	    		margin-top: 50px;
	    		font-size: 16px;
	    		color: #fff;
	    	}
	    }
	    .select-box:after{
	    	content: url(./../assets/dropangle.png);
		    font: 35px "Consolas", monospace;
		    color: #fff;
		    right: 20px;
		    top: 14px;
		    padding: 0 0 2px;
		    position: absolute;
		    pointer-events: none;
	    }
	    .logo{
	    	margin-top: 70px;
	    	img{
	    		width: 270px;
	    	}
	    }
    }
    .right{
    	position: absolute;
	    display: block;
	    bottom: 150px;
	    right: 65px;
	    ul{
	    	list-style: none;
	    	li{
					  color: #fff;
				    padding: 10px;
				    cursor: pointer;
				    font-size: 14px;
	    	}
	    	a{
	    		text-decoration: none;
	    		color: #fff;
	    	}
	    }
    }
    .foot-info{
    	position: absolute;
	    bottom: 30px;
	    left: 37vw;
	    text-align: center;
	    span{
	    	font-size: 12px;
        position: relative;
        color: #fff;
	    }
    }
    .contact{
    	position: absolute;
	    right: 5%;
	    bottom: 30px;
	    letter-spacing: 6px;
	    font-size: 23px;
	    color: #fff;
      .down{
      	transform: rotate(45deg);
		    border: solid white;
		    border-width: 0 3px 3px 0;
		    display: inline-block;
		    padding: 6px;
		    position: absolute;
		    top: 4px;
		    right: -35px;
      }
    }
    .show{
    	display: none;
    }
    .blackcon{
    	position: absolute;
	    top: 0;
	    left: 0;
    	display: block;
    	width: 100%;
    	height: 100%;
    	background-color: rgba(0,0,0,0.85);
    }
  }
</style>