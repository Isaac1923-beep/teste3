import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../pages/portfolio.vue'

const routes = [
  { path: '/', redirect: '/portfolio' },
  { path: '/portfolio', component: Portfolio }
]

export default createRouter({
  history: createWebHistory(),
  routes
})