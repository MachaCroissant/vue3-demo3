<template>
  <section
    @click="close"
    class="z-20 h-screen w-screen bg-gray-200 fixed top-0 opacity-50"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
        <h1 class="text-xl text-center">Login</h1>
        <GoogleLogin @close-login-from-google="close" />
        <p class="my-2 text-center">Or</p>
        <form class="p-2 my-2" @submit.prevent="submit">
          <div class="my-4">
            <label for="">Email or Username</label>
            <input
              ref="emailRef"
              v-model="email"
              class="rounded shadow p-2 w-full"
              placeholder="Enter your email or username"
            />
          </div>
          <div class="my-4">
            <label for="">Password</label>
            <input
              v-model="password"
              class="rounded shadow p-2 w-full"
              placeholder="Enter your password"
            />
          </div>
          <div class="my-4">
            <button
              type="submit"
              class="w-full rounded shadow-md bg-gray-500 text-white p-2"
            >
              <span v-if="!isLoading">Login</span>
              <span v-else>⏳</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase.js";
import GoogleLogin from "../components/Google/GoogleLogin.vue";
export default {
  components: { GoogleLogin },
  data() {
    return {
      email: "drunk99@google.com",
      password: "password",
      isLoading: false,
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch((e) => {
          console.log(e);
          this.isLoading = false;
        });
    },
    close() {
      this.$emit("close-login");
    },
  },
  mounted() {
    this.$refs.emailRef.focus();
  },
};
</script>

<style></style>
