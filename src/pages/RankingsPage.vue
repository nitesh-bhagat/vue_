<template>
  <div class="flex flex-col py-4 px-8 gap-2">
    <h1 class="text-xl">Current Ranking</h1>

    <PeopleTile
      v-for="(person, index) in getRanking"
      :key="person.id"
      :person="person"
      :standing="index+1"
    />
  </div>
</template>

<script>
import PeopleTile from "@/components/PeopleTile.vue";

export default {
  name: "RankingsPage",
  components: {
    PeopleTile
  },
  computed: {
    // getPeopleList(){
    //     return this.$store.state.people
    // },
    getRanking() {
      return this.$store.getters.getLatestRanking;
    }
  }
};
</script>