import { defineComponent } from 'vue';
import styles from '@/style/content.module.scss';
import ContentMenu from './ContentMenu';
import ContentBody from './ContentBody';
import ContentFooter from './ContentFooter';

export default defineComponent({
  name: 'ContentMain',
  setup() {
    return () => (
      <div class={styles.content}>
        <ContentMenu class={styles.content__menu} />
        <ContentBody class={styles.content__body} />
        <ContentFooter class={styles.content__footer} />
      </div>
    );
  },
});
