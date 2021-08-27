import { defineComponent } from 'vue';
import { Me, RightOne } from '@icon-park/vue-next';
import style from '@/style/LoginAvatar.module.scss';
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
      avatar = <a-avatar size={48} src={src}></a-avatar>;
    } else {
      // 未登录状态
      avatar = (
        <a-avatar size={48}>
          <Me theme="outline" size="48" fill="#333" strokeWidth={3} />
        </a-avatar>
      );
    }

    return () => (
      <div class={style.container}>
        {avatar}
        <span>{username}</span>
        <RightOne class={style.rightone} theme="filled" size="16" fill="#9b9b9b" strokeWidth={3} />
      </div>
    );
  },
});
