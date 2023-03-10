import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm'
import { ValidationObserver } from 'vee-validate'
import '@/assets/sass/style.sass'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
