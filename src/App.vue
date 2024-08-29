<template>
  <div class="flex flex-row bg-slate-50 gap-0 items-center justify-center min-h-screen">
    <div class="w-2/3 bg-white min-h-screen">
      <NavBar />
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
  components: {
    NavBar,
    RouterView
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
