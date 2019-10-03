<template>
  <div class="home">
  	<div class="video-bg">
  		<video class="video-a" muted="muted" loop='loop' autoplay="autoplay" src="@/assets/videobg.mp4"></video>
  	</div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <HelloWorld/>
      </div>
      <div class="section">
        <HelloCn/>
      </div>
      <div class="section">
        <SwiperPic/>
      </div>
      <div class="section"> 
        <Newnews/>
      </div>
      <div class="section">
        <JoinUs/>
      </div>
      <div class="section">
        <RePort/>
      </div>
      <div class="section">
        <LastPg/>
      </div>
    </full-page>
  </div>
</template>




<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HelloCn from '@/components/HelloCn.vue'
import SwiperPic from  '@/components/SwiperPic.vue'
import Newnews from '@/components/Newnews.vue'
import JoinUs from '@/components/JoinUs.vue'
import RePort from '@/components/RePort.vue'
import LastPg from '@/components/LastPg.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    HelloCn,
    SwiperPic,
    Newnews,
    JoinUs,
    RePort,
    LastPg,
  },
  data(){
    return{
      options:{
        licenseKey: "4F375E3E-7D814D7F-B82954BA-31DC667F",
        anchors: [
          "landing",
          "about",
          "development",
          "news",
          "joinus",
          "whistleblower",
          "contact"
        ],
      }
    }
  }
}
</script> 

<style lang="less">
  .home{
  	width: 100%;
  	height: 100%;
  }
  .video-bg{
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

  }
  .video-a{
    position:fixed;
    background-size:cover;
    width: 100%;
    height: 100%;
    padding: 0;
    vertical-align: baseline;;
    object-fit: cover;
    z-index: -99;
  }
  .container{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
