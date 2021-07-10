import { createApp } from 'vue';
import App from './App';
import i18n from './language/index';
import Antd from './plugins/antd';

createApp(App).use(i18n).use(Antd).mount('#app');
