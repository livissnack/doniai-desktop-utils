import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './stores/index'
import '@fortawesome/fontawesome-free/js/all'
import 'bulma/css/bulma.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
