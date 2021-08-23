import { defineComponent } from 'vue';
import { Me } from '@icon-park/vue-next';
import { useStore } from '../plugins/store';

export default defineComponent({
  name: 'LoginAvatar',
  setup() {
    const store = useStore();
    const { username } = store.state;
    let avatar: JSX.Element;
    if (store.state.loginState) {
      // 登录状态
      const src = '';
      avatar = <a-avatar size="small" src={src}></a-avatar>;
    } else {
      // 未登录状态
      avatar = (
        <a-avatar size="small">
          <me theme="outline" size="16" fill="#333" strokeWidth="3"></me>
        </a-avatar>
      );
    }

    return () => (
      <div>
        {avatar}
        <span>{username}</span>
      </div>
    );
  },
});
