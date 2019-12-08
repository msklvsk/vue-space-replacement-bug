import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // eslint-disable-next-line no-console
  mounted: () => console.log(document.getElementsByTagName('p')[0].innerHTML.charCodeAt(1))
}).$mount('#app')
