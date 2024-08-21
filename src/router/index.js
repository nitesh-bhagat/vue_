import { createRouter, createWebHistory } from "vue-router";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

   

  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top when navigating to a new route
    return { top: 0 };
  },
});

export default router;
