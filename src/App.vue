<template>
  <AppHeader />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <LoginModel />
  </teleport>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModel from "./components/LoginModel.vue";
import firebase from "./utilities/firebase.js";
export default {
  components: { AppHeader, LoginModel },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setIsLoggedIn");
        this.$store.commit("setAuthUser", user);
        console.log(user);
      } else {
        this.$store.commit("setIsLoggedIn", false);
        this.$store.commit("setAuthUser", {});
        console.log("No User");
      }
    });
  },
};
</script>
