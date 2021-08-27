import { defineComponent } from 'vue';
import styles from '@/style/content.module.scss';

export default defineComponent({
  name: 'ContentFooter',
  setup() {
    return () => <div class={styles.footer}></div>;
  },
});
