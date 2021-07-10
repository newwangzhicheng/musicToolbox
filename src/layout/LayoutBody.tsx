import { defineComponent } from 'vue';
import ContentMain from './ContentMain';

export default defineComponent({
  name: 'LayoutBody',
  setup() {
    return () => <ContentMain />;
  },
});
