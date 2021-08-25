import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';
import i18n from '../language/index';

export interface State {
  loginState: boolean;
  username: string;
}

export const key: InjectionKey<Store<State>> = Symbol('State');

export const store: Store<State> = createStore<State>({
  state: {
    // 登录状态
    loginState: false,
    // 用户名称
    username: i18n.global.t('common.notLoggedIn'),
  },
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
