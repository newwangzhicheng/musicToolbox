import { defineComponent } from 'vue';
import LayoutHeader from './LayoutHeader';
import LayoutBody from './LayoutBody';
import styles from '@/layout/style/layout.module.scss';

export default defineComponent({
  name: 'LayoutMain',
  setup() {
    return () => (
      <div class={styles['layout']}>
        <LayoutHeader />
        <LayoutBody class={styles['layout__body']} />
      </div>
    );
  },
});
