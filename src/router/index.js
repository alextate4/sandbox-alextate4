import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mercury',
    name: 'Mercury',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mercury" */ '../views/Mercury.vue')
  },
  {
    path: '/earth',
    name: 'Earth',
    component: () =>
      import(/* webpackChunkName: "earth" */ '../views/Earth.vue')
  },
  {
    path: '/jupiter',
    name: 'Jupiter',
    component: () =>
      import(/* webpackChunkName: "jupiter" */ '../views/Jupiter.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
