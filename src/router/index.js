import Vue from 'vue';
import VueRouter from 'vue-router';
import FirstPage from '../components/FirstPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'FirstPage',
    meta: { title: 'FirstPage' },
    component: FirstPage,
  },
  {
    path: '/secondPage',
    name: 'secondPage',
    meta: { title: 'secondPage' },
    component: () => import('../components/SecondPage'),
  },
  {
    path: '/thirdPage',
    name: 'thirdPage',
    meta: { title: 'thirdPage' },
    component: () => import('../components/ThirdPage'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
