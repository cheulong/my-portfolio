import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Portfolio from './views/Portfolio.vue'
import Resume from './views/Resume.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {title: 'Home'}
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {title: 'About'}
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
      meta: {title: 'Portfolio'}
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
      meta: {title: 'Resume'}
    }
  ]
})
