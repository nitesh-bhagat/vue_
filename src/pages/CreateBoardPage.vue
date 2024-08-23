<template>
  <div class="flex flex-col items-center w-1/2 mx-auto justify-center min-h-screen">
    <h1 class="text-3xl font-bold">Create Board</h1>
    <span
      class="text-center"
    >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta minima ut quod obcaecati.</span>
    <div class="my-4"></div>

    <div class="flex flex-col w-full gap-1">
      <input
        type="text"
        placeholder="Name of the board"
        class="bg-slate-100 border p-2 outline-none focus:ring-1 focus:ring-green-400 rounded-md"
      />

      <button
        type="text"
        placeholder="Name of the board"
        class="border p-2 bg-green-400 hover:bg-green-500 rounded-md font-bold text-white"
      >
        <span>Create</span>
      </button>
    </div>

    <RouterLink to="/" class="py-2">Back to home</RouterLink>
  </div>
</template>


<script>
import { RouterLink } from "vue-router";

export default {
  name: "CreateBoard",
  components: {
    RouterLink
  }
};
</script>