import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      authUser: {},
      isLoginOpen: true,
      // 如果isLoginOpen是false，那么一开始就不会弹出登陆框，并且再次点击login不会有默认的初始用户
    };
  },
  mutations: {
    setIsLoggedIn(state, payload = true) {
      state.isLoggedIn = payload;
    },
    setAuthUser(state, payload) {
      state.authUser = payload;
    },
    setLoginModal(state, payload) {
      state.isLoginOpen = payload;
    },
  },
});

export default store;
