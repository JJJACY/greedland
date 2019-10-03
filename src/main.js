import Vue from "vue";
import App from "./App.vue";
import router from './router';
// import VueFullPage from 'vue-fullpage.js';
import 'simplebar';
import 'simplebar/dist/simplebar.css';
//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper';
import "swiper/dist/css/swiper.css";
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions

//   全屏滚动
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

// Vue.use(VueFullPage);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
