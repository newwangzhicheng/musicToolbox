import '@/style/main.scss';
import { defineComponent } from "vue";
import logoUrl from '@/assets/logo.png'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <img src={logoUrl} alt="Vue logo" />
        <a-button type="primary">Antd按钮</a-button>
      </>
    )
  }
})