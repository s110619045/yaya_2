import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import VueFirestore from 'vue-firestore';
import './firebase';

Vue.use(VueFirestore)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
