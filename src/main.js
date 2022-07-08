import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import { routes } from "@/data";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

app.use(router);
app.mount("#app");
