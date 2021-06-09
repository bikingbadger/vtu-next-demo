import { createApp } from 'vue';
import store from './store';
import axios from 'axios';

import App from './App.vue';

const app = createApp(App);
app.config.globalProperties.$http = axios;
app.config.globalProperties.$cool_function = (name: String) =>
  `Welcome ${name}`;

app.use(store);

app.mount('#app');
