import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
import DcHeros from "./pages/DcHeros.vue";
import Calendar from "./pages/Calendar.vue";
import Markdown from "./pages/Markdown.vue";
import Slider from "./pages/Slider.vue";
import Calculator from "./pages/Calculator.vue";
import ReusableModal from "./pages/ResueableModal.vue";
import Chat from "./pages/Chat.vue";
import UserCrud from "./pages/UserCrud.vue";
import store from "./store/index.js";
import Tensorflow from "./pages/Tensorflow.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heros", component: DcHeros },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator, meta: { middleware: "auth" } },
  { path: "/resuable-modal", component: ReusableModal },
  {
    path: "/chat",
    component: Chat,
    meta: { middleware: "auth" },
  },
  {
    path: "/user-crud",
    component: UserCrud,
  },
  {
    path: "/tensorflow",
    component: Tensorflow,
  },
];
const router = createRouter({
  history: createWebHistory(),
  // createWebHashHistory默认会有#这个键，要取消直接使用createWebHistory()
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`);
    if (middleware) {
      middleware.default(next, store);
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
