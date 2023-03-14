import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';

import routes from '@/routers/index';
import permission from '@/utils/permission';


const app = createApp(App);
app.use(routes);
app.use(createPinia());

app.use(permission);
app.mount('#app');
