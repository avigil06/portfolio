import Vue from 'vue';
import App from './App.vue';
import router from './router';
import registerPlugins from './plugins';
import './registerServiceWorker';

Vue.config.productionTip = false;

registerPlugins(Vue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
