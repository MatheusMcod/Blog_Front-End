import { createRouter, createWebHistory } from 'vue-router'
 
function lazyLoad(view) {
  return () => import(`../views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: lazyLoad('app')
  },
  {
    path: '/login',
    name: 'login',
    component: lazyLoad('LoginPage'),
    meta: {layout: 'empty-layout'}
  },
  {
    path: '/:pathMatch(.*)',
    name: 'PageNotFound',
    component: lazyLoad('PageNotFound'),
    meta: {layout: 'empty-layout'}
  }
] 


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
