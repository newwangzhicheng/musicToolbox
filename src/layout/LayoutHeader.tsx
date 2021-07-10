import { defineComponent } from 'vue';
import styles from '@/layout/style/layout.module.scss';

export default defineComponent({
  name: 'LayoutHeader',
  setup() {
    return () => (
      <div class={styles['header']}></div>
    );
  },
});
