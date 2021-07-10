import  'ant-design-vue/dist/antd.css';
import {
  Button,
} from 'ant-design-vue';
import { App } from 'vue';

export default {
  install(vue: App) {
    vue.component(Button.name, Button);
  },
};