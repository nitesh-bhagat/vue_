import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import NotFoundView from "@/views/NotFoundView.vue"
import CreateBoardPage from "@/views/CreateBoardPage.vue"
import SignIn from "@/views/auth/SignIn.vue"
import SignUp from "@/views/auth/SignUp.vue"




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/create-board",
      name: "create-board",
      component: CreateBoardPage,
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/:catchAll(.*)",
      name: "Not-Found-Page",
      component: NotFoundView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top when navigating to a new route
    return { top: 0 };
  },
});

export default router;
