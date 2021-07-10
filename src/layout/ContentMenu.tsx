import { defineComponent } from 'vue';
import styles from '@/layout/style/content.module.scss';

export default defineComponent({
  name: 'ContentMenu',
  setup() {
    return () => (
      <div class={styles['menu']}></div>
    );
  },
});
