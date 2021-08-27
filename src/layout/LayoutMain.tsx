import { defineComponent } from 'vue';
import styles from '@/style/layout.module.scss';
import LayoutHeader from './LayoutHeader';
import LayoutBody from './LayoutBody';

export default defineComponent({
  name: 'LayoutMain',
  setup() {
    return () => (
      <div class={styles.layout}>
        <LayoutHeader />
        <LayoutBody class={styles.layout__body} />
      </div>
    );
  },
});
