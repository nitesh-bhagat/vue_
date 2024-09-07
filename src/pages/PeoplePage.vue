<template>
  <div class="flex flex-col p-4 gap-2">
    <div class="flex flex-row items-center justify-between">
      <h1 class="text-xl">People</h1>
      <button>Add People</button>
    </div>

    <div
      v-for="person in getPeople"
      :key="person.id"
      class="border p-2 rounded-md flex flex-row gap-2"
    >
      <img :src="person.image" :alt="person.name" class="w-12 rounded-md" />
      <div class="flex flex-col">
        <span>{{ person.name }}</span>
        <span class="text-sm font-bold">Total points {{ person.points }}</span>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "People",
  computed: {
    getPeople() {
      return this.$store.state.people;
    }
  }
};
</script>
