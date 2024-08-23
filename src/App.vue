<template>
  <div class="flex flex-row bg-slate-50 gap-0 items-center justify-center min-h-screen">
    <div class="w-2/3 bg-white min-h-screen">
      <NavBar />
      <RouterView />
    </div>
  </div>
</template>


<script>
import NavBar from "./components/NavBar/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>
