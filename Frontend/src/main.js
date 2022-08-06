import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';

import PrimeVue from 'primevue/config';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Carousel from 'primevue/carousel';

Vue.config.productionTip = false
Vue.use(PrimeVue);


import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);


import moment from 'moment';

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('YYYY/MM/DD')
    }
});


Vue.component('Button', Button);
Vue.component('InputText', InputText);
Vue.component('Carousel', Carousel);

const app = new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
});


app.$mount('#app')
