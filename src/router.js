import Vue from 'vue'
import Router from 'vue-router'
import Login from './Login.vue'
import SignUp from './SignUp.vue'
import App from './App.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/app',
      name: 'App',
      component: App
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
