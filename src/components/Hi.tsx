import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Hi',
  setup() {
    return () => (
      <div>
        <div>{$t('helloWorld')}</div>
        <a-button type="primary">{$t('helloWorld')}</a-button>
      </div>
    );
  },
});
