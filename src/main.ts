import { createApp } from 'vue';
import App from './App';
import i18n from './language/index';
import antd from './plugins/antd';
import { store, key } from './plugins/store';

createApp(App).use(i18n).use(antd).use(store, key).mount('#app');
