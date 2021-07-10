import '@/style/main.scss';
import '@/style/variables.scss';
import { defineComponent } from "vue";
import LayoutMain from './layout/LayoutMain';

export default defineComponent({
  name: 'App',
  setup() {
    return () => <LayoutMain />;
  }
})