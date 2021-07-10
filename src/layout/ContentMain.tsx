import { defineComponent } from 'vue';
import ContentMenu from './ContentMenu';
import ContentBody from './ContentBody';
import ContentFooter from './ContentFooter';
import styles from '@/layout/style/content.module.scss';

export default defineComponent({
  name: 'ContentMain',
  setup() {
    return () => (
      <div class={styles['content']}>
        <ContentMenu class={styles['content__menu']} />
        <ContentBody class={styles['content__body']} />
        <ContentFooter class={styles['content__footer']} />
      </div>
    );
  },
});