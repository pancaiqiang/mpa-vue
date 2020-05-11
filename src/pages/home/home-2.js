import Vue from 'vue'
import Home from './Home2.vue'

Vue.config.productionTip = false

console.log('111222');

new Vue({
  render: h => h(Home)
}).$mount('#app')
