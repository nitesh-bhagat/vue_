<template>
  <div>
    <Ranking v-show="getCurrentTab === 0" />
    <Matches v-show="getCurrentTab === 1" />
    <People v-show="getCurrentTab === 2" />
  </div>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
  computed: {},
  methods: {}
};
</script>