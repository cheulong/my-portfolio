import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Resume from './components/Resume.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/portfolio',
      name: 'about',
      component: Portfolio
    },
    {
      path: '/resume',
      name: 'about',
      component: Resume
    }
  ]
})
