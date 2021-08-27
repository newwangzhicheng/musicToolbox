import { defineComponent } from 'vue';
import styles from '@/style/content.module.scss';
import MenuMain from '../components/MenuMain';

export default defineComponent({
  name: 'ContentMenu',
  setup() {
    return () => (
      <div class={styles.menu}>
        <MenuMain />
      </div>
    );
  },
});
