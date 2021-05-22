import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import VueSearch from './components/vue-search.vue';
import VueRange from './components/vue-range.vue';

window.Vue = Vue;
Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el: '#vue-app',
  components: {
    VueSearch,
    VueRange,
  },
});
