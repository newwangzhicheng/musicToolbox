import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Hi',
  setup() {
    return () => <div>{$t('helloWorld')}</div>;
  },
});
