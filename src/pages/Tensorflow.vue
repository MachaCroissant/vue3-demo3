<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <h1 class="text-2xl my-4">Tensorflow Object Detection</h1>
        <div class="flex flex-wrap justify-center my-2">
          <div class="w-full flex justify-center m-2">
            <button
              v-if="!isStreaming"
              class="w-32 rounded shadow-md bg-gray-500 text-white p-2"
              @click="opencamera"
            >
              Open Camera
            </button>

            <div v-else class="flex justify-around">
              <button
                class="w-32 rounded shadow-md bg-gray-500 text-white p-2"
                @click="stopstreaming"
              >
                Stop Streaming
              </button>
              <button
                class="w-32 rounded shadow-md bg-gray-500 text-white p-2"
                @click="snapshot"
              >
                Take Snapshot
              </button>
            </div>
          </div>
          <video ref="videoRef" autoplay="true" width="200" class="my-4" />
        </div>

        <div class="flex flex-wrap justify-center">
          <img
            ref="imgRef"
            src="https://images.unsplash.com/photo-1567581935884-3349723552ca"
            width="200"
            crossorigin="anonymous"
          />
          <div class="w-full text-center my-4">
            <button
              @click="detect"
              class="w-32 rounded shadow-md bg-gray-500 text-white p-2"
            >
              <span v-if="isLoading">Loading ...</span>
              <span v-else>Detect Object</span>
            </button>
            <div v-if="result.length > 0" class="w-full">
              <p>{{ result[0].class }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
// Note: Require the cpu and webgl backend and add them to package.json as peer dependencies.
require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");
export default {
  setup() {
    const imgRef = ref("");
    const result = ref([]);
    const isLoading = ref(false);
    const isStreaming = ref(false);
    const videoRef = ref("");

    async function detect() {
      const img = imgRef.value;
      isLoading.value = true;
      const model = await cocoSsd.load();
      const predictions = await model.detect(img);
      result.value = predictions;
      isLoading.value = false;
    }

    async function opencamera() {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const cams = devices.filter((device) => device.kind === "videoinput");
      const camId = cams[0].deviceId;
      const video = cams.length === 1 ? true : { deviceId: { exact: camId } };
      navigator.mediaDevices.getUserMedia({ video: video }).then((stream) => {
        isStreaming.value = true;
        videoRef.value.srcObject = stream;
      });
    }

    function stopstreaming() {
      const stream = videoRef.value.srcObject;
      const tracks = stream.getTracks();
      tracks.map((track) => track.stop());
      isStreaming.value = false;
    }

    function snapshot() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoRef.value, 0, 0, 200, 200);
      const data = canvas.toDataURL("image/png");
      imgRef.value.setAttribute("src", data);
    }

    return {
      imgRef,
      videoRef,
      result,
      detect,
      isLoading,
      opencamera,
      isStreaming,
      stopstreaming,
      snapshot,
    };
  },
};
</script>

<style></style>
