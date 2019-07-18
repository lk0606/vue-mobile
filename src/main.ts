import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
// style
import 'normalize.css'
import '@/assets/sass/bxs-reset.scss'
import '@/assets/sass/table.scss'
import '@/assets/sass/public.scss'
import '@/assets/sass/scroll-reset.scss'
import '@/assets/sass/line.scss'
// import 'lib-flexible'

// import '@/assets/sass/responsive.scss'
// import '@/assets/sass/common.scss'
// import '@/assets/sass/media.scss'
// other components
import Bxs from 'bxs-ui-vue'
Vue.use(Bxs)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
