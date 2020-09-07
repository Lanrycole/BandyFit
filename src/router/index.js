import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Gallery from '../views/Gallery.vue'
import VueScrollTo from 'vue-scrollto'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)
Vue.use(VueScrollTo)

export default new VueRouter({

mode:'history',
  routes:[
{
  path: '/',
      name: 'Home',
    component: Home
},
{
  path: '/about',
      name: 'About',
    component:About
},
{
  path: '/gallery',
      name: 'Gallery',
    component: Gallery
},
{
  path: '/contact',
      name: 'Contact',
    component: Contact
},
      ]
})

