// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import Projects from "../pages/projects.vue";
import About from "../pages/about.vue";
import Contact from "../pages/contact.vue";

const routes = [
  {
    path: "/",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
