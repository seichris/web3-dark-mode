import Vue from 'vue';
import { t } from '@stylebot/i18n';

import App from './App.vue';

import {
  IconsPlugin,
  ListGroupPlugin,
  FormCheckboxPlugin,
} from 'bootstrap-vue';

Vue.use(IconsPlugin);
Vue.use(ListGroupPlugin);
Vue.use(FormCheckboxPlugin);

Vue.mixin({
  methods: {
    t,
  },
});

new Vue({
  el: '#app',
  render: h => h(App),
});
