import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Doodle from './views/Doodle.vue';
import CreateDoodle from './views/CreateDoodle.vue';

/*const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Home,
  },
  {
    path: '/page1',
    name: 'Page 1',
    component: Page1,
  },
  {
    path: '/page2',
    name: 'Page 2',
    component: Page2,
  },
];*/

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/doodle/:id', name: 'Doodle', component: Doodle, props: true },
  { path: '/create', name: 'CreateDoodle', component: CreateDoodle },
  { path: '/:p(\\d+)', name: 'HomeP', component: Home, props: true }

];
const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: 'active',
});

export default router;