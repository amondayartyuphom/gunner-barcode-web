import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AboutMe from '@/pages/AboutMe.vue'
import Home from '@/pages/Home.vue'
import StickerDesign from '@/pages/StickerDesign.vue'
import Claim from '@/pages/Claim.vue'
import Vdo from '@/pages/Vdo.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import LazyTube from "vue-lazytube";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(LazyTube);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCW2fzdLg2Cahf1PTLjXSEO8_ek5WYmNP4',
    libraries: 'places',
  }
});
Vue.use(VueRouter)
const routes = [
  { path: '/about-me', component: AboutMe },
  { path: '/home', component: Home},
  { path: '/stickerdesign', component: StickerDesign},
  { path: '/claim', component: Claim},
  { path: '/vdo', component: Vdo}
  
  
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
