<template>
  <div class="flex flex-row bg-slate-50 gap-0 items-center justify-center min-h-screen">
    <div class="w-2/3 bg-white min-h-screen">
      <NavBar v-if="showNavBar" />
      <RouterView />
    </div>
  </div>
</template>


<script>
import {mapActions, mapGetters} from "vuex";
import NavBar from "./components/NavBar/NavBar.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  data() {
    return {
      hideNavBarFrom: ["home", "create-board", "testing", "signin", "signup"]
    };
  },
  components: {
    NavBar,
    RouterView
  },
  computed: {
    ...mapGetters(["getLatestRanking"]),
    showNavBar() {
      const currentRoute = this.$route.name;
      return !this.hideNavBarFrom.includes(currentRoute);
    }
  },
  methods: {
    ...mapActions(["getAllPlayers","getAllMatches", "getAllBoard"])
  },

  async mounted() {
    await this.getAllPlayers();
    await this.getAllMatches();
    await this.getAllBoard();
    await this.getLatestRanking();
  }
};
</script>
