<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>
      <p
        class="text-3xl text-right mt-10 w-32 h-10 overflow-x-scroll"
        style="direction: rtl"
      >
        {{ currentNum }}
      </p>
      <div class="h-5">
        <small v-if="selectedOperation"
          >{{ prevNum }} {{ selectedOperation }} {{ currentNum }}</small
        >
      </div>
      <div class="grid grid-cols-4 gap-2">
        <button
          @click="pressed('1')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          1
        </button>
        <button
          @click="pressed('2')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          2
        </button>
        <button
          @click="pressed('3')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          3
        </button>
        <button @click="pressed('+')" class="p-2 border rounded shadow h-10">
          +
        </button>
        <button
          @click="pressed('4')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          4
        </button>
        <button
          @click="pressed('5')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          5
        </button>
        <button
          @click="pressed('6')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          6
        </button>
        <button @click="pressed('-')" class="p-2 border rounded shadow h-10">
          -
        </button>
        <button
          @click="pressed('7')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          7
        </button>
        <button
          @click="pressed('8')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          8
        </button>
        <button
          @click="pressed('9')"
          class="p-2 border rounded shadow w-10 h-10"
        >
          9
        </button>
        <button @click="pressed('*')" class="p-2 border rounded shadow h-10">
          *
        </button>

        <button
          @click="pressed('c')"
          class="p-2 border rounded shadow h-10 w-10"
        >
          C
        </button>

        <button
          @click="pressed('0')"
          class="p-2 border rounded shadow h-10 w-10"
        >
          0
        </button>

        <button @click="pressed('=')" class="p-2 border rounded shadow h-10">
          =
        </button>
        <button @click="pressed('/')" class="p-2 border rounded shadow h-10">
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import useWindowEvent from "../utilities/copmosition/useWindowEvent.js";

export default {
  setup() {
    const operations = ["+", "-", "*", "/"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const currentNum = ref("");
    const prevNum = ref("");
    const selectedOperation = ref("");

    function pressed(value) {
      if (value === "=" || value === "Enter") calculate();
      else if (value === "c") clear();
      else if (operations.includes(value)) applyOperations(value);
      else if (numbers.includes(value)) appendNumber(value);
    }

    function appendNumber(value) {
      currentNum.value = currentNum.value + value;
    }

    function applyOperations(value) {
      calculate();
      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOperation.value = value;
    }

    function calculate() {
      if (selectedOperation.value === "+")
        currentNum.value = +prevNum.value + +currentNum.value;
      // change string to number with a + before the variable
      else if (selectedOperation.value === "-")
        currentNum.value = prevNum.value - currentNum.value;
      else if (selectedOperation.value === "*")
        currentNum.value = prevNum.value * currentNum.value;
      else if (selectedOperation.value === "/")
        currentNum.value = prevNum.value / currentNum.value;

      prevNum.value = "";
      selectedOperation.value = "";
    }

    function clear() {
      currentNum.value = "";
    }

    const handleKeydown = (e) => {
      pressed(e.key);
      console.log(e.key);
    };

    useWindowEvent("keydown", handleKeydown);

    return { currentNum, pressed, prevNum, selectedOperation };
  },
};
</script>

<style></style>
