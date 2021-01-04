<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-2 text-white"
  >
    <router-link
      v-for="item in list"
      :key="item.toPage"
      :to="item.toPage"
      class="mx-2"
      >{{ item.title }}</router-link
    >
    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="openLogin">
      Login
    </button>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase.js";

export default {
  data() {
    return {
      list: [
        { title: "Dc Heros", toPage: "/dc-heros" },
        { title: "Calendar", toPage: "/calendar" },
        { title: "Markdown", toPage: "/markdown" },
        { title: "Slider Carousel", toPage: "/slider" },
        { title: "Calculator", toPage: "/calculator" },
        { title: "Modal", toPage: "/resuable-modal" },
        { title: "Chat", toPage: "/chat" },
        { title: "User Crud", toPage: "/user-crud" },
        { title: "Tensorflow", toPage: "/tensorflow" },
      ],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    openLogin() {
      this.$store.commit("setLoginModal", true);
    },
  },
};
</script>

<style></style>
