


import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/Login.vue';
import SignupPage from '../components/SignUp.vue';
import ToDoList from '../components/ToDoList.vue';




const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignupPage },
  { path: '/todo', component: ToDoList, name: "todo" }

];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
