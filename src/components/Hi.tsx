import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Hi',
  setup() {
    return () => <div>hello world</div>;
  },
});
