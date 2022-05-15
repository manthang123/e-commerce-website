import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component:()=> import('../views/Auth/LoginPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:()=> import('../views/Auth/LoginPage.vue')
  },
  {
    path: '/register',
    name : 'register',
    component:()=> import('../views/Auth/RegisterPage.vue')
  },
  {
    path: '/otp',
    name: 'otp',
    component: ()=> import('../views/Auth/OtpPage.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: ()=> import('../views/Auth/AddressPage.vue')
  },
  {
    path: '/home',
    name: 'LatestBooks',
    component: ()=> import('../views/HomePage/home.vue')
  },
  {
    path: '/book',
    name: 'bookView',
    component: ()=> import('../views/HomePage/BookView.vue')
  },
  {
    path: '/searchResult',
    name: 'searchResult',
    component: ()=> import('../views/SearchPage/SearchResult.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: ()=> import('../views/Cart/cart.vue')
  },
  {
    path: '/user',
    name: 'userView',
    component: ()=> import('../views/UserProfile/UserProfileView.vue')
  },
  {
    path: '/userEdit',
    name: 'userEdit',
    component: ()=> import('../views/UserProfile/UserProfileEdit.vue')
  },
  {
    path: '/wishList',
    name: 'wishList',
    component: ()=> import('../views/WishList/WishList.vue')
  },
  {
    path: '/orderDetails',
    name: 'orderDetails',
    component: ()=> 
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
