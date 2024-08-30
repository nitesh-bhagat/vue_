<template>
  <div class="flex flex-row bg-slate-50 gap-0 items-center justify-center min-h-screen">
    <div class="w-2/3 bg-white min-h-screen">
      <NavBar v-if="showNavBar" />
      <RouterView />
    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import NavBar from "./components/NavBar/NavBar.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  data() {
    return {
      hideNavBarFrom: ["home", "create-board"]
    };
  },
  components: {
    NavBar,
    RouterView
  },
  computed: {
    showNavBar() {
      const currentRoute = this.$route.name;
      return !this.hideNavBarFrom.includes(currentRoute);
    }
  },
  methods: {
    ...mapActions(["getAllMatches", "getAllBoard"])
  },

  async mounted() {
    await this.getAllMatches();
    await this.getAllBoard();
  }
};
</script>
