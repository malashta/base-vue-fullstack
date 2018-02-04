/**
 * Created by Malashta Sergey on 01.02.2018.
 * email: malashta@gmail.com
 * url: http://malashta.ru
 */

import Vue from 'vue';
import 'es6-promise/auto';
import {createApp} from './app';

const {app, router, store} = (typeof window === 'undefined') ? {} : createApp();


if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);
    let diffed = false;
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c));
    });
    const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _);
    if (!asyncDataHooks.length) {
      return next();
    }

    Promise.all(asyncDataHooks.map(hook => hook({store, route: to})))
      .then(() => {
        next();
      })
      .catch(next);
  });

  // mount to DOM
  app.$mount('#app');
});

// service worker
if (location.protocol === 'https:' && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js');
}
