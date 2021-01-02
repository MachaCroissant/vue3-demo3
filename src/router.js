import { createWebHistory, createRouter } from "vue-router";
import DcHeros from "./pages/DcHeros.vue";
import Calendar from "./pages/Calendar.vue";
import Markdown from "./pages/Markdown.vue";
import Slider from "./pages/Slider.vue";
const routes = [
  { path: "/dc-heros", component: DcHeros },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
];
const router = createRouter({
  history: createWebHistory(),
  // createWebHashHistory默认会有#这个键，要取消直接使用createWebHistory()
  routes,
});
export default router;
