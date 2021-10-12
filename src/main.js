import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import 'styles/index.less'

import FastClick from 'fastclick'
FastClick.attach(document.body)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('assets/placeholder.png'),
})

import Message from 'components/Message'
Vue.use(Message)

Vue.prototype.$bus = new Vue()
Vue.prototype.$store = store

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
