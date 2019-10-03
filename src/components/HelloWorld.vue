<template>
  <div class="first">
		<div class="home ">
			<div class="left">
				<div class="logo">
					<img class="logo-img" src="@/assets/header-logo.gif">
				</div>
			</div>
			<div class="right">
				<div class="right-list">
			    <a class="listitem" href="#about">关于实地</a>
					<a class="listitem" href="#development">地产开发</a>
					<a class="listitem" href="#news">最新消息</a>
					<a class="listitem" href="#joinus">加入实地</a>
					<a class="listitem" href="#whistleblower">廉洁举报</a>
					<a class="listitem" href="#contact">联系我们</a>		
				</div>
				<div class="header-humburger">
					<img src="@/assets/hamburger.png">
			  </div>
				<div class="lang-button">
					<a class="en-btn">EN</a>
					<a class="cn-btn">CN</a>
				</div>	
			</div>
		</div>
		<div class="landing-grid">
			<div class="landing-line-box-center">
				<div class="landing-line-box-h1 lightline lineupdown"></div>
				<div class="landing-line-box-h2 lightline lineupdown"></div>					
			</div>
			<div class="landing-line-box">
				<div class="landing-line-box-1 run1 landing-line-gothrough"></div>
				<div class="landing-line-box-2 run2 landing-line-gothrough"></div>
				<div class="landing-line-box-3 run3 landing-line-gothrough"></div>
			</div>
			<div class="landing-vline-box">
				<div class="landing-vline-1 vrun1 landing-vline-gothrough"></div>
				<div class="landing-vline-2 vrun2 landing-vline-gothrough"></div>
				<div class="landing-vline-3 vrun3 landing-vline-gothrough"></div>	
				<div class="landing-vline-4 vrun4 landing-vline-gothrough"></div>	
				<div class="landing-vline-5 vrun5 landing-vline-gothrough"></div>	
				<div class="landing-vline-6 vrun6 landing-vline-gothrough"></div>	
				<div class="landing-vline-7 vrun7 landing-vline-gothrough"></div>		
			</div>
		</div>
		<div class="landing-add-box">
			<p :class="`landing-add` + add" v-for="add in 17">+</p> 
		</div>
		<div class="landing-body">
			<div class="landing-content">
				<div class="landing-title">THE FUTURE</div>
				<div class="landing-title">IS HERE</div>
				<div class="landing-subtitle">未来*就在眼前</div>
			</div>
			<div class="landing-mousescroll">
				<div class="landing-mousescrolltextcn">向下滚动</div>
				<div class="landing-mousescrolltexten">Scroll down for more</div>
			</div>
			<span class="landing-scroll-btn">
				<span class="landing-mouse">
					<span></span>
				</span>
			</span>	
		</div>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';

export default {
  name: "HelloWorld",
  props: {
  },
  components:{
  	simplebar
  },
  data(){
  	return{
  		adds: ['+',]
  	}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.first{
	width: 100%;
	height: 100%;
	.home{
	  clear: both;
	  top: 0px;
	  right: 0px;
	  z-index: 2;
	  position: static;
	  .left{
	  	display: block;
	  	float: left;
	  	width: 50%;
	  	padding-top: 2%;
	    transform: translateY(10px);
	    .logo{
	    	position: absolute;
	      transform: translateY(10px);
	    }
	    .logo-img{
	    	left: 25%;
		    height: 25px;
		    position: relative;
		    width: 270px;
		    object-fit: contain;
	    }
	  }
	  .right{
	  	float: right;
	    width: 50%;
	    padding-top: 2%;
	    transform: translateY(13px);
	    .right-list{
	    	display: inline;
			  font-family: "DIN-Regular";
			  font-size: 14px;
			  vertical-align: sub;
	    }
	    .listitem{
	    	position: relative;
	    	padding-right: 30px;
		  	text-decoration: none;
		  	color: #fff;
			}
			.listitem:hover{
				cousor: pointer;
			}
			.listitem::after{
		    content: "";
		    position: absolute;
		    width: 100%;
		    height: 3px;
		    top: -38px;
		    left: 0;
		    background: #fff;
		    opacity: 0;
		    transition: .3s opacity;
			}
	    .listitem:hover::after{
		    opacity:1;
		  }
		  .header-humburger{
		  	float: right;
		    right: 6%;
		    position: relative;
		  }
		  .header-humburger img{
	      width: 25px;
		  }
		  .lang-button{
		    margin-right: 9%;
		    display: inline;
		    font-family: "DIN-Regular";
		    font-size: 14px;
		    vertical-align: sub;
		    float: right;
		    color: #fff;
		  }
		  .en-btn{
		  	display: block;
		  }
	  }
	}
	.landing-grid{
		width: 100%;
	  position: absolute;
	  bottom: calc(100vh/7);
	  top: calc(100vh/9);
	  .landing-line-box-center{
	  	width: 100%;
	    top: 0;
	    bottom: 0;
	    position: absolute;
	    .landing-line-box-h1.lightline.lineupdown{
	    	width: 100%;
	    	border-bottom:3px solid transparent;
	    }
	    .lightline{
	    	animation: lineardashcenter 1s .8s linear forwards;
	      transform-origin: center;
	    }
	    @keyframes lineardashcenter{
				0%{
					left:50%;
					right:50%;
					width:0%;
				}
				100%{
					left:0%;
					right:0%;
					width:100%;
				}
			}
	    .lineupdown{
	    	opacity: 0.9;
		    background-image: linear-gradient(white, white), radial-gradient(#fafafa,rgba(0,0,0,0));
		    background-origin: border-box;
		    background-clip: content-box, border-box;
	    }
	    .landing-line-box-h1{
	    	width: 0;
		    top: 0;
		    position: absolute;
	    }
	    .landing-line-box-h2.lightline.lineupdown{
	    	width: 100%;
	    	border-bottom:solid 0.05em transparent;
	    }
	    .landing-line-box-h2{
	    	width: 0;
		    bottom: 0;
		    position: absolute;
	    }
	  }
	  .landing-line-box{
	    width: 100%;
	    top: 0;
	    bottom: 0;
	    position: absolute;
	    .run1{
	    	animation: linearh1 1s 1s linear forwards;
	    }
	    @keyframes linearh1{
				0%{
					left:37.5%;
					right:62.5%;
					width:0%;
				}
				100%{
					left:0%;
					right:0%;
					width:100%;
				}
			}
	    .landing-line-box-1{
	    	top: 25%;
		    left: 0;
		    position: absolute;
	    }
	    .landing-line-gothrough{
	    	  opacity: 0.9;
			    border-bottom: 1px solid #fafafa; 
			    border-bottom: solid 0.05em transparent;
			    background-image: linear-gradient(white, white), radial-gradient(#fafafa,rgba(0,0,0,0));
			    background-origin: border-box;
			    background-clip: content-box, border-box;
			    width: 100%; 
	    }
	    .landing-line-box-2{
	    	top: 51%;
	      position: absolute;
	    }
	    .landing-line-box-3{
	    	top: 75%;
	      position: absolute;
	    }
	    .run2{
	    	animation: linearh2 1s .8s linear forwards;
	    }
	    @keyframes linearh2{
				0%{
					left:75%;
					right:25%;
					width:0%;
				}
				100%{
					left:0%;
					right:0%;
					width:100%;
				}
			}
	    .run3{
	    	animation: linearh3 1s .8s linear forwards;
	    }
	    @keyframes linearh3{
				0%{
					width:0%;
				}
				100%{
					width:100%;
				}
			}
	  }
	  .landing-vline-box{
	  	width: 100%;
	    top: 0;
	    bottom: 0;
	    position: absolute;
	    .vrun1{
	    	animation: linearv1 1s 5s linear forwards;
	    }
	    .vrun2 {
			  animation: linearv2 1s 4s linear forwards;
			}
			.vrun3 {
			  animation: linearv3 1s 3s linear forwards;
			}
			.vrun4 {
			  animation: linearv4 1s 2s linear forwards;
			}
			.vrun5 {
			  animation: linearv5 1s 7s linear forwards;
			}
			.vrun6 {
			  animation: linearv6 1s 5s linear forwards;
			}
			.vrun7 {
			  animation: linearv6 1s 6s linear forwards;
			}
			@keyframes linearv1{
				0%{
					top:75%;
					bottom:25%;
					height:0%;
				}
				100%{
					top:0%;
					bottom:0%;
					height:100%;
				}
			}

			/*Vgrid2*/
			@keyframes linearv2{
				0%{
					top:50%;
					bottom:50%;
					height:0%;
				}
				100%{
					top:0%;
					bottom:0%;
					height:100%;
				}
			}
			/*Vgrid3*/
			@keyframes linearv3{
				0%{
					top:75%;
					bottom:25%;
					height:0%;
				}
				100%{
					top:0%;
					bottom:0%;
					height:100%;
				}
			}
			/*Vgrid4*/
			@keyframes linearv4{
				0%{
					top:50%;
					bottom:50%;
					height:0%;
				}
				100%{
					top:0%;
					bottom:0%;
					height:100%;
				}
			}
			/*Vgrid5*/
			@keyframes linearv5{
				0%{
					top:25%;
					bottom:75%;
					height:0%;
				}
				100%{
					top:0%;
					bottom:0%;
					height:100%;
				}
			}
			/*Vgrid6*/
			@keyframes linearv6{
				0%{
					top:50%;
					bottom:50%;
					height:0%;
				}
				100%{
					top:0%;
					bottom:0%;
					height:100%;
				}
			}
	    .landing-vline-1{
	    	height: 100%;
	    	position: absolute;
	      left: calc((100%/2)/4);
	    }
	    .landing-vline-gothrough{
	    	opacity: 0.5;
		    border-left: solid 0.8px transparent;
		    background-image: linear-gradient(white, white), radial-gradient(#fafafa,rgba(0,0,0,0));
		    background-origin: border-box;
		    background-clip: content-box, border-box;
	    }
	    .landing-vline-2{
	    	height: 100%;
	    	position: absolute;
	      left: calc(((100%/2)/4)*2);
	    }
	    .landing-vline-3{
	    	height: 100%;
	    	position: absolute;
	      left: calc(((100%/2)/4)*3);
	    }
	    .landing-vline-4{
	    	height: 100%;
	    	position: absolute;
	      left: calc(100%/2);
	    }
	    .landing-vline-5{
	    	height: 100%;
	      position: absolute;
	      right: calc(((100%/2)/4)*3);
	    }
	    .landing-vline-6{
	    	position: absolute;
		    right: calc(((100%/2)/4)*2);
		    height: 100%; 
	    }
	    .landing-vline-7{
	    	position: absolute;
	      right: calc((100%/2)/4);
		    height: 100%; 
	    }
	  }
	}
	.landing-add-box{
		width: 100%;
    position: absolute;
    bottom: calc(100vh/7);
    top: calc(100vh/9);
		p{
			animation: fadeInadd 1s 2s forwards;
			font-size: 21px;
			margin-top: 1px;
			color: #fff
		}	
		//+++++++++++++++++++++++
		.landing-add1{
			top: 25.7%;
      left: 12.4%;
	    transform: translate(-5px,-17px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		.landing-add2{
			left: 12.4%;
	    transform: translate(-5px,-17px);
	    position: absolute;
	    top: 75.6%;
		}
		.landing-add3{
			top: 0.8%;
	    left: 25%;
	    transform: translate(-5px,-16px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		.landing-add4{
			top: 51.7%;
	    left: 25%;
	    transform: translate(-5px,-17px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		.landing-add5{
			top: 100.7%;
	    left: 25%;
	    transform: translate(-5px,-18px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		.landing-add6{
			top: 0.8%;
	    left: 50%;
	    transform: translate(-5px,-16px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		.landing-add7{
			top: 51.7%;
	    left: 50%;
	    transform: translate(-5px,-17px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		.landing-add8{
			top: 100.7%;
	    left: 50%;
	    transform: translate(-5px,-17px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		.landing-add9{
			top: 25.9%;
	    right: 36.8%;
	    transform: translate(-5px,-17px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		.landing-add10{
			top: 75.7%;
	    right: 36.8%;
	    transform: translate(-5px,-17px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		.landing-add11{
			top: 0.8%;
	    right: 25%;
	    transform: translate(5px,-16px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		.landing-add12{
			top: 51.7%;
	    right: 24.3%;
	    transform: translate(-5px,-17px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		.landing-add13{
			top: 100.7%;
	    right: 25%;
	    transform: translate(5px,-18px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		.landing-add14{
			top: 25.6%;
	    right: 11.8%;
	    transform: translate(-5px,-17px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		.landing-add15{
			top: 75.7%;
	    right: 11.8%;
	    transform: translate(-5px,-17px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		.landing-add16{
			top: 75.7%;
	    left: 37.5%;
	    transform: translate(-5px,-17px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		.landing-add17{
			top: 25.7%;
      left: 37.4%;
	    transform: translate(-5px,-17px);
	    position: absolute;
	    margin: 0;
	    padding: 0;
		}
		@keyframes fadeInadd{
			0%{ opacity:0;}
			100%{opacity:1;}
		}
		//+++++++++++++++++++++++	 
	}
	.landing-body{
  	width: 100%;
    position: absolute;
    bottom: calc(100vh/7);
    top: calc(100vh/9);
    .landing-content{
    	position: relative;
	    float: right;
	    width: 50%;
	    top: 25.5%;
	    .landing-title{
		    font-size: 40px;
		    right: 0%;
		    position: relative;
		    letter-spacing: 8px;
		    color: #fff;
	    }
	    .landing-subtitle{
		    font-size: 35px;
		    padding-top: 2%;
		    opacity: 1;
		    position: relative;
		    color: #fff;
	    }
    }
    .landing-mousescroll{
    	position: absolute;
	    bottom: 0;
	    text-align: center;
	    left: 0;
	    right: 0;
	    transform: translateY(2px);
	    animation: fadeInDown 1s 7s linear forwards;
	    .landing-mousescrolltextcn{
	    	font-size: 20px;
		    opacity: 0.8;
		    margin-bottom: 7px;
		    color: #fff;
	    }
	    .landing-mousescrolltexten{
	    	font-size: 14px;
		    letter-spacing: 3px;
		    text-transform: uppercase;
		    font-family: 'Roboto', sans-serif;
		    padding-bottom: 14px;
		    display: inline-block;
		    border-bottom: 2px dashed #fff;
		    color: #fff;
	    }
    }
    .landing-scroll-btn{
    	position: absolute;
	    left: 0;
	    right: 0;
	    bottom: -19%;
	    animation: fadeInDown 1s 7s linear forwards;
    	.landing-mouse{
	    	position: relative;
		    display: block;
		    width: 30px;
		    height: 55px;
		    margin: 0 auto 30px;
		    -webkit-box-sizing: border-box;
		    -moz-box-sizing: border-box;
		    box-sizing: border-box;
		    border: 2px solid white;
		    border-radius: 15px;
		    opacity: 0.8;
	    }
	    .landing-mouse::before {
		    content: "";
		    position: absolute;
		    width: 1px;
		    height: 160px;
		    background: rgba(255,255,255,0.6);
		    top: 52px;
		    left: 50%;
		    transform: translatex(-50%);
			}
			.landing-mouse::after {
		    content: "+";
		    position: absolute;
		    top: 200px;
		    left: 50%;
		    animation-name: spin;
		    animation-duration: 1000ms;
		    animation-iteration-count: 1;
		    animation-timing-function: linear;
		    transform: translatex(-50%) rotate(45deg);
		    color: #fff;
			}
			@keyframes spin {
		    0%  {-webkit-transform: rotate(45deg);}
		    100% {-webkit-transform: rotate(90deg);}   
			}
			.landing-mouse span{
				position: absolute;
		    top: 29%; 
		    left: 50%;
		    width: 8px;
		    height: 8px;
		    margin: -4px 0 0 -4px;
		    background: white;
		    border-radius: 50%;
		    -webkit-animation: ani-mouse 2s linear infinite;
		    animation: ani-mouse 2s linear infinite;
			}
			@keyframes ani-mouse{
				0% {-webkit-transform: translateY(0); opacity: 2;}
				100% {-webkit-transform: translateY(25px); opacity: 0;}
			} 
    }
  }
}


</style>
