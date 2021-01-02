<template>
  <div class="m-auto">
    <h1 class="text-3xl text-center my-4">DC heros {{ heroCount }}</h1>
    <ul class="border rounded p-2">
      <li
        class="flex justify-between"
        v-for="(value, index) in dcheros"
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
export default {
  methods: {
    // 不在methods中使用arrow function，因为不保有指向该vue实例的this
    // 但我们在method中需要用到vue实例中的data function里面的数据
    addHero() {
      this.dcheros.push({ name: this.newHero });
      this.newHero = "";
    },
    remove(index) {
      this.dcheros = this.dcheros.filter((heros, i) => i !== index);
    },
  },
  computed: {
    heroCount() {
      return this.dcheros.length;
    },
  },
  data() {
    return {
      attribute: "value",
      isDisabled: false,
      newHero: "",
      dcheros: [
        { name: "Supergirl" },
        { name: "Batman" },
        { name: "Flash" },
        { name: "Arrow" },
        { name: "Superman" },
      ],
    };
  },
  mounted() {
    this.$refs.newHeroRef.focus();
  },
};
</script>

<style></style>
