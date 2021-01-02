<template>
  <div class="flex flex-wrap w-full relative">
    <div class="w-full absolute" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
        <div
          v-if="currentSlice == index"
          :class="color"
          style="height: 350px"
        ></div>
      </transition>
    </div>
    <div class="absolute w-full" style="height: 340px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(slider, index) in sliders"
          :key="slider"
          @click="makeActive(index)"
          :class="currentSlice == index ? 'bg-gray-700' : 'bg-gray-300'"
          class="w-4 h-4 mx-2 rounded-full cursor-pointer"
        ></div>
      </div>
    </div>
  </div>
  <!-- <div class="my-10 flex w-full">
    <div class="m-auto">
      <transition name="fade">
        <h1 v-if="isTitleShowing">Slider Carousel</h1>
      </transition>
      <button
        @click="isTitleShowing = !isTitleShowing"
        class="px-2 rounded border"
      >
        Toggle Text
      </button>
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      currentSlice: 0,
      interval: "",
      sliders: ["bg-yellow-600", "bg-blue-600", "bg-pink-600"],
      isTitleShowing: true,
    };
  },
  methods: {
    makeActive(index) {
      this.currentSlice = index;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      console.log(`I am changing current slide ${this.currentSlice}`);
      this.currentSlice = this.currentSlice === 2 ? 0 : this.currentSlice + 1;
    }, 2000);
  },
  beforeUnMount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
