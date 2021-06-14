import '@/style/main.scss';
import { defineComponent } from "vue";
import logoUrl from '@/assets/logo.png';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div>
        <img src={logoUrl} alt="Vue logo" />
        <button v-t="helloWorld"></button>
      </div>
    )
  }
})