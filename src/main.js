// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import VModal from 'vue-js-modal'
import Lightbox from 'vue-simple-lightbox'

 
Vue.use(VModal)
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(Lightbox)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
