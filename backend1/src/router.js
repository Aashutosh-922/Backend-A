import Vue from 'vue';
import VueRouter from 'vue-router';
import FormPage from './components/FormPage.vue';
import CandidatesPage from './components/CandidatesPage.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'FormPage',
    component: FormPage,
  },
  {
    path: '/candidates',
    name: 'CandidatesPage',
    component: CandidatesPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
