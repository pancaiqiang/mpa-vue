import Vue from 'vue'
import Aboutus from './Aboutus.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Aboutus)
}).$mount('#app')
