<template>
  <div class="flex flex-col p-4 gap-2">
    <div class="flex flex-row items-center justify-between">
      <h1 class="text-xl">Matches {{ matches.length }}</h1>
      <button @click="toggleForm">{{ isMatchFormOppen?'Cancel':'Add a match' }}</button>
    </div>
    <MatchForm v-show="isMatchFormOppen" @onNewMatchSubmit="refreshed" />
    <h1 v-show="!matches.length>0" class="text-xl text-center">No Matches</h1>
    <MatchCard v-for="match in matches.slice().reverse()" :key="match.id" :match="match" />
  </div>
</template>
  
  
  <script>
import MatchCard from "@/components/MatchCard.vue";
import MatchForm from "@/components/Forms/MatchForm.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "MatchPage",
  data() {
    return {
      isMatchFormOppen: false,
      isRefreshed: false
    };
  },
  components: {
    MatchCard,
    MatchForm
  },
  computed: {
    ...mapState(["matches"])
  },
  methods: {
    ...mapActions(["getAllMatchesbyId"]),
    toggleForm() {
      this.isMatchFormOppen = !this.isMatchFormOppen;
    },
    async refreshed() {
      this.isRefreshed = true;
      console.log("ref");
      // await this.getAllMatchesbyId();
    }
  },
  async mounted() {
    await this.getAllMatchesbyId();
  },
  updated() {
    // this.refreshed();
    if (this.isRefreshed) {
      this.getAllMatchesbyId();
    }
  }
};
</script>