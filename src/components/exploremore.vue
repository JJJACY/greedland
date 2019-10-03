<template>
	<div class="exploremore button fp-controlArrow fp-next">
		<div class="left" style="pointer-events: none;">
			<div class="en">EXPLORE MORE</div> 
			<div class="cn">点击更多</div>
		</div> 
		<div class="right" style="pointer-events: none;">
			<div class="about-rightarrow"></div> 
			<div class="about-arrowtipup"></div> 
			<div class="about-arrowtipdown"></div>
		</div>
		<p id="aboutplus1">+</p>
		<p id="aboutplus2">+</p> 
		<p id="aboutplus3">+</p> 
		<p id="aboutplus4">+</p>
	</div>
</template>

<script>
	
</script>

<style lang="less">
	.exploremore.button {
    background-color: transparent;
    border: 1px solid #fafafa;
    padding: 10px 13px;
    margin-right: 0;
    transition: background-color 0.2s ease-in;
    width: 318px;
    position:relative;
    .left{
    	.en{
    		cursor: pointer;
		    letter-spacing: 3px;
		    white-space: nowrap;
		    padding-bottom: 5px;
		    font-family: "DIN-Light";
		    font-size: 14px;
		    color: #fff;
    	}
    	.cn{
    		cursor: pointer;
		    letter-spacing: 3px;
		    white-space: nowrap;
		    padding-bottom: 5px;
		    font-family: "DIN-Light";
		    font-size: 14px;
		    color: #fff;
    	}
    }
    .right{
    	position: relative;
    	width: auto;
    	.about-rightarrow{
    		border-bottom: 2px solid #fafafa;
		    position: absolute;
		    width: 70px;
		    bottom: 30px;
		    right: 20px; 
    	}
    	.about-arrowtipup{
			  border-bottom: 1px solid #fafafa;
		    margin-top: 10px;
		    position: absolute;
		    bottom: 30px;
		    width: 5%;
		    right: 20px;
		    transform: rotate(32deg);
		    transform-origin: bottom right;
	   }
    }
    #aboutplus1 {
	    position: absolute;
	    top: -10px;
	    left: -5px;
	    font-size: 18px;
	    color: #fff;
		}
		#aboutplus2 {
	    position: absolute;
	    top: -10px;
	    right: -5px;
	    font-size: 18px;
	    color: #fff;
		}
		#aboutplus3 {
	    position: absolute;
	    bottom: -11px;
	    left: -5px;
	    font-size: 18px;
	    color: #fff;
		}
		#aboutplus4 {
		    position: absolute;
		    bottom: -11px;
		    right: -5px;
		    font-size: 18px;
		    color: #fff;
		}
	}
	.exploremore:hover{
    background-color: rgb(82, 82, 82);
  }
	
</style>