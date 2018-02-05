/**
 * Created by Malashta Sergey on 04.02.2018.
 * email: malashta@gmail.com
 * url: http://malashta.ru
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const MainLayout = () => import('../views/layouts/MainLayout.vue');
const HomePage = () => import('../views/HomePage.vue');

export function createRouter() {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: [
      {
        path: '/',
        component: MainLayout,
        children: [
          {path: '/', name: 'home', component: HomePage}
        ]
      }
    ]
  });
}
