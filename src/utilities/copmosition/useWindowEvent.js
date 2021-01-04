import { onMounted, onUnmounted } from "vue";
export default function useWindowEvent(eventname, handlevent) {
  onMounted(() => {
    window.addEventListener(eventname, handlevent);
  });

  onUnmounted(() => {
    window.removeEventListener(eventname, handlevent);
  });
}
