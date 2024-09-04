<template>
  <div
    :class="['flex flex-row  gap-2 items-center border-b py-2 bg-white hover:scale-105 cursor-pointer transition delay-50' ]"
  >
    <span :class="[standing===1?'text-5xl text-green-500':'text-3xl', 'w-16 ']">#{{ standing }}</span>
    <img :src="person.image" :alt="person.name" class="w-12 rounded-md" />
    <div class="flex flex-col">
      <span>{{ person.name }}</span>
      <span class="text-sm">email</span>
    </div>
    <div class="flex flex-row items-center ml-auto">
      <span :class="[standing===1?'text-2xl text-green-500':'text-base','font-bold']">{{ person.points }} Points</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeopleTile",
  props: ["person", "standing"],
  computed: {
    getXP() {
      return Number(this.person.total_goal / this.person.total_matches);
    }
  }
};
</script>