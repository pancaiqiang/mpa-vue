import Vue from 'vue'
import Home from './Home.vue'

Vue.config.productionTip = false

console.log('1111');

new Vue({
  render: h => h(Home)
}).$mount('#app')
