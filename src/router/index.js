import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import MatchPage from "@/pages/MatchPage.vue";
import TestingPage from "@/pages/TestingPage.vue";
import RankingsPage from "@/pages/RankingsPage.vue";
import PeoplePage from "@/pages/PeoplePage.vue";
import NotFoundView from "@/pages/NotFoundView.vue"
import CreateBoardPage from "@/pages/CreateBoardPage.vue"
import AchievementPage from "@/pages/AchievementPage.vue"
import SignIn from "@/pages/auth/SignIn.vue"
import SignUp from "@/pages/auth/SignUp.vue"




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
      path: "/matches",
      name: "matches",
      component: MatchPage,
    },
    {
      path: "/rankings",
      name: "Rankings",
      component: RankingsPage,
    },
    {
      path: "/achievement",
      name: "Achievement",
      component: AchievementPage,
    },
    {
      path: "/people",
      name: "People",
      component: PeoplePage,
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
      path: "/testing",
      name: "testing",
      component: TestingPage,
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
