import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import store from './store/store'

import Connexion from './components/connexion/connexion.vue'
import Carte from './components/carte/carte.vue'
import Dataset from './components/dataset/dataset.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

export const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path: '/carte', component:Carte},
    {path: '/connexion', component:Connexion},
    {path: '/dataset', component:Dataset},
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
