<template>
    <TabBar />
    <Ranking v-show="getCurrentTab === 0" />
    <Matches v-show="getCurrentTab === 1" />
    <People v-show="getCurrentTab === 2" />
</template>

<script>
import TabBar from '@/components/Tabs/TabBar.vue';
import Matches from '../components/Tabs/MatchesTab.vue';
import Ranking from '../components/Tabs/RankingTab.vue';
import People from '../components/Tabs/PeopleTab.vue';


export default {
    name: "HomePage",
    components: {
        Ranking,
        Matches,
        TabBar,
        People,

    },
    computed: {
        getCount() {
            return this.$store.state.count
        },
        getCurrentTab() {
            return this.$store.state.selectedTabIndex;
        }

    },
    methods: {

    },
}

</script>