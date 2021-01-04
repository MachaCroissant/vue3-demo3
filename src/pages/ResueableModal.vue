<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5 text-center">Re-usable Modal</h1>
      <Modal v-if="isModal1Open" @close="isModal1Open = false">
        <template v-slot:title>Modal1</template>
        <template v-slot:body><p>This is the body slot for modal1</p></template>
      </Modal>
      <button
        class="border rounded px-2 mx-4 bg-blue-500 text-white"
        @click="isModal1Open = true"
      >
        Open Modal1
      </button>

      <Modal v-if="isModal2Open" @close="isModal2Open = false">
        <template v-slot:title>Modal2</template>
        <template v-slot:body><p>This is the body slot for modal2</p></template>
      </Modal>
      <button
        class="border rounded px-2 mx-4 bg-blue-500 text-white"
        @click="isModal2Open = true"
      >
        Open Modal2
      </button>
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const isModal1Open = ref(false);
    const isModal2Open = ref(false);
    return { isModal1Open, isModal2Open };
  },
};
</script>

<style></style>
