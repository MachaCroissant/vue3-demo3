<template>
  <AppHeader :isLoggedIn="isLoggedIn" @open-login-model="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <LoginModel v-if="isLoginOpen" @close-login="isLoginOpen = false" />
  </teleport>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModel from "./components/LoginModel.vue";
import firebase from "./utilities/firebase.js";
export default {
  components: { AppHeader, LoginModel },
  data() {
    return {
      isLoginOpen: true,
      isLoggedIn: true,
      authUser: {},
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
        console.log(user);
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
        console.log("No User");
      }
    });
  },
};
</script>
