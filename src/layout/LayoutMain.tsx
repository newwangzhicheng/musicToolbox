import styles from './LayoutMain.module.scss';
import { defineComponent } from 'vue';
import LayoutHeader from './LayoutHeader';
import LayoutBody from './LayoutBody';

export default defineComponent({
  name: 'LayoutMain',
  setup() {
    return () => (
      <div class={styles.main}>
        <LayoutHeader class={styles.header} />
        <LayoutBody class={styles.body} />
      </div>
    );
  },
});
