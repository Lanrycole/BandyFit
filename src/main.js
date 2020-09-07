import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  'animate.css';
import AOS from 'aos';
import VueScrollTo from 'vue-scrollto'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  offset:80,
  duration: 1000,
});

Vue.config.productionTip = false
Vue.use(VueScrollTo)




new Vue({

  router,
  render: h => h(App)
}).$mount('#app')
