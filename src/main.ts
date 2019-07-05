import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
// style
import 'normalize.css'
// import 'lib-flexible'

// import '@/assets/sass/responsive.scss'
// import '@/assets/sass/common.scss'
// import '@/assets/sass/media.scss'
// other components
import Bxs from 'bxs-ui-vue'
Vue.use(Bxs)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
