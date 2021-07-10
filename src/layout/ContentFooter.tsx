import { defineComponent } from 'vue';
import styles from '@/layout/style/content.module.scss';

export default defineComponent({
  name: 'ContentFooter',
  setup() {
    return () => (
      <div class={styles['footer']}></div>
    );
  },
});
