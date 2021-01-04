<template>
  <div class="m-auto">
    <h1 class="text-3xl text-center my-4">DC heros {{ heroCount }}</h1>
    <ul class="border rounded p-2">
      <li
        class="flex justify-between"
        v-for="(value, index) in dcHeros"
        v-bind:key="value.name"
      >
        {{ value.name }}
        <button v-on:click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded"
        v-model="newHero"
        placeholder="Type New Hero Name"
        ref="newHeroRef"
      />
      <button
        class="border rounded bg-gradient-to-t from-red-400 to-yellow-300 text-white"
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
export default {
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeros = ref([
      { name: "Supergirl" },
      { name: "Batman" },
      { name: "Flash" },
      { name: "Arrow" },
      { name: "Superman" },
    ]);

    onMounted(() => {
      newHeroRef.value.focus();
    });

    const heroCount = computed({
      get: () => {
        return dcHeros.value.length;
      },
    });

    function remove(index) {
      dcHeros.value = dcHeros.value.filter((heros, i) => i !== index);
    }

    function addHero() {
      dcHeros.value.unshift({ name: this.newHero });
      newHero.value = "";
    }

    return { dcHeros, newHero, remove, heroCount, addHero, newHeroRef };
  },

  data() {
    return {
      attribute: "value",
      isDisabled: false,
    };
  },
};
</script>

<style></style>
