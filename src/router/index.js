import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/Views/HomeView.vue";
import JobView from "@/Views/JobView.vue";
import ExploreView from "@/Views/ExploreView.vue";
import NotFoundView from "@/Views/NotFoundView.vue";
import JobInfoView from "@/Views/JobInfoView.vue";
import SignInView from "@/Views/SignInView.vue";
import SignUpView from "@/Views/SignUpView.vue";
import ProfileView from "@/Views/ProfileView.vue";
import CreateJobView from "@/Views/CreateJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobView,
    },
    {
      path: "/jobs/:id",
      name: "Job-Detail",
      component: JobInfoView,
    },
    {
      path: "/explore",
      name: "Explore",
      component: ExploreView,
    },
    {
      path: "/sign-in",
      name: "Sign In",
      component: SignInView,
    },
    {
      path: "/sign-up",
      name: "Sign Up",
      component: SignUpView,
    },
    {
      path: "/create-job",
      name: "Create Job",
      component: CreateJobView,
    },
    {
      path: "/profile/:id",
      name: "Profile",
      component: ProfileView,
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
