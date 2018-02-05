/**
 * Created by Malashta Sergey on 04.02.2018.
 * email: malashta@gmail.com
 * url: http://malashta.ru
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      test: []
    }
  });
}
