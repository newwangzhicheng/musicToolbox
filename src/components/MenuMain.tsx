import { defineComponent } from 'vue';
import LoginAvatar from './LoginAvatar';

export default defineComponent({
  name: 'MenuMain',
  setup() {
    return () => (
      <div>
        <LoginAvatar />
      </div>
    );
  },
});
