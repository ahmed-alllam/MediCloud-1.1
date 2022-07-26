import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import Chartkick from "vue-chartkick"
import Chart from "chart.js"


import PrimeVue from 'primevue/config';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Carousel from 'primevue/carousel';

Vue.config.productionTip = false
Vue.use(Chartkick.use(Chart))
Vue.use(PrimeVue);


Vue.component('Button', Button);
Vue.component('InputText', InputText);
Vue.component('Carousel', Carousel);

const app = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
});


app.$mount('#app')
