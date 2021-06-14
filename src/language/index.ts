import {createI18n} from 'vue-i18n';
import zh from './zh-CN';
import en from './en-US';

export default createI18n({
  locale: 'zh',
  legacy: false,
  messages: {
    zh,
    en,
  },
});