import { createRouter, createWebHistory } from "vue-router";
import homePage from "../views/homePage.vue";
import shopPage from "../views/shopPage.vue";
import aboutPage from "../views/aboutPage.vue";
import contactPage from "../views/contactPage.vue";
import loginPage from "../views/loginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: homePage,
    },
    {
      path: "/shop",
      component: shopPage,
    },
    {
      path: "/about",
      component: aboutPage,
    },
    {
      path: "/contact",
      component: contactPage,
    },
    {
      path : '/login',
      component : loginPage , 
    }
  ],
});

export default router;
