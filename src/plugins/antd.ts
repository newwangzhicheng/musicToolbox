import 'ant-design-vue/dist/antd.css';
import { Button, Avatar } from 'ant-design-vue';
import { App } from 'vue';

export default {
  install(vue: App) {
    vue.component(Button.name, Button);
    vue.component(Avatar.name, Avatar);
  },
};
