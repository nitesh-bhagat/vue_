<template>
  <div
    :class="['flex flex-row  gap-2 items-center border-b py-2 bg-white hover:scale-105  cursor-pointer transition delay-50' ]"
  >
    <span :class="[standing===1?'text-5xl text-green-500':'text-3xl', 'w-16']">#{{ standing }}</span>
    <img :src="person.image" :alt="person.name" class="w-12 rounded-md" />
    <div class="flex flex-col gap-1">
      <span>{{ person.name }}</span>
      <!-- <span class="text-sm">email</span> -->
      <div class="flex flex-row gap-1 items-center max-w-72">
        <span class="text-xs text-slate-400">Streak:</span>
        <div
          class="flex flex-row items-center justify-center rounded-full w-4 h-4 bg-green-400 text-white text-[0.635rem] text-center"
        >W</div>
        <div
          class="flex flex-row items-center justify-center rounded-full w-4 h-4 bg-red-400 text-white text-[0.635rem] text-center"
        >L</div>
      </div>
    </div>
    <div class="flex flex-row items-center ml-auto gap-8">
      <div class="flex flex-col items-center justify-center">
        <span class="text-xs">Played</span>
        <span class="font-bold">{{ person.total_matches }}</span>
      </div>
      <div class="flex flex-col items-center justify-center">
        <span class="text-xs">Won</span>
        <span class="font-bold">{{ person.won_matches }}</span>
      </div>
      <div class="flex flex-col items-center justify-center">
        <span class="text-xs">Lost</span>
        <span class="font-bold">{{ person.lost_matches }}</span>
      </div>
      <div class="flex flex-col items-center justify-center">
        <span class="text-xs">G.F</span>
        <span class="font-bold">{{ person.goal_for }}</span>
      </div>
      <div class="flex flex-col items-center justify-center">
        <span class="text-xs">G.A</span>
        <span class="font-bold">{{ person.goal_against }}</span>
      </div>
      <div class=" flex-col items-center justify-center hidden">
        <span class="text-xs">G.D</span>
        <span class="font-bold">{{ roundToDecimal(person.goal_for / total_matches) }}</span>
      </div>

      <div class="flex flex-col items-center justify-center w-16">
        <span class="text-xs">Rating</span>
        <span
          :class="[standing===1?'text-2xl text-green-500':'text-base','font-bold  text-right']"
        >{{ person.mmr }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeopleTile",
  props: ["person", "standing"],
  data() {
    return {
      matches: 0
    };
  },
  computed: {
  },
  methods: {
    roundToDecimal(value, decimals) {
      const number = parseFloat(value);
      if (isNaN(number)) {
        return 0; // Return 0 if NaN
      }
      return parseFloat(number.toFixed(decimals)); // Or use Math.round method shown above
    }
  }
};
</script>