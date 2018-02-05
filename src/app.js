/**
 * Created by Malashta Sergey on 01.02.2018.
 * email: malashta@gmail.com
 * url: http://malashta.ru
 */

import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import {createStore} from './store';
import {createRouter} from './router';
import {sync} from 'vuex-router-sync';

export function createApp() {
  const store = createStore();
  const router = createRouter();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return {app, router, store};
}

