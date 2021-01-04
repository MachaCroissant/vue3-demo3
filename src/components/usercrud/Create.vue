<template>
  <button class="px-2 py-1 border rounded my-4" @click="isModalOpen = true">
    Add User
  </button>
  <teleport to="body">
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <template #title>
        Add New User
      </template>
      <template #body>
        <form @submit.prevent="submit">
          <label>Name</label>
          <div class="w-full p-2 rounded border">
            <input v-model="state.form.name" placeholder="User Name" />
          </div>
          <label>Email</label>
          <div class="w-full p-2 rounded border">
            <input
              v-model="state.form.email"
              placeholder="User Email"
              type="email"
            />
          </div>
          <label>Avatar</label>
          <div class="w-full p-2 rounded border">
            <input
              v-model="state.form.avatar"
              placeholder="Avatar URL"
              type="text"
            />
          </div>
          <div class="p-2">
            <input
              class="w-full p-2 rounded border hover:bg-gray-400"
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import Modal from "../Modal.vue";
import { ref, reactive } from "vue";
import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// 这个部分可以放到自定义的axios.js文件中，那么引入的时候直接从自己定义的axios引入就可以了

export default {
  components: { Modal },
  setup(_, { emit }) {
    const isModalOpen = ref(false);
    const state = reactive({
      form: {
        name: "",
        email: "",
        avatar: "",
      },
    });

    async function submit() {
      const { data } = await axios.post("/users", state.form);
      console.log(data);
      emit("new-user-added", data);
      state.form.email = "";
      state.form.name = "";
      state.form.avatar = "";
      isModalOpen.value = false;
    }

    return { state, isModalOpen, submit };
  },
};
</script>

<style></style>
