// import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#26b3ff',
          secondary: '#26b3ff',
          accent: '#26b3ff',
          error: '#b71c1c',
          background: '#F4FAFA',
        },
      },
    },
    icons: {
      // iconfont: 'fa',
    },
});
