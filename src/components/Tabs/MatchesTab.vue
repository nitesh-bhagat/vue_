<template>
  <div class="flex flex-col p-4 gap-2">
            <div class="flex flex-row items-center justify-between">
                <h1 class="text-xl">Matches</h1>
                <button @click="toggleForm">{{ isMatchFormOppen?'Cancel':'Add a match' }}</button>
            </div>
            <MatchForm v-show="isMatchFormOppen"/>
            <h1 v-show="!matchList.length>0" class="text-xl text-center">No Matches</h1>
            <MatchCard v-for="match in matchList.slice().reverse()" :key="match.id" :match="match"/>
            </div>
</template>


<script>
import MatchCard from '@/components/MatchCard.vue';
import MatchForm from '@/components/Forms/MatchForm.vue';


export default{
    name:"Matches",
    data(){
        return {
            isMatchFormOppen:false
        }
    },
    components:{
        MatchCard,
        MatchForm
    },
    computed:{
        matchList(){
            return this.$store.state.matches;
        }
    },
    methods:{
        toggleForm(){
            this.isMatchFormOppen = !this.isMatchFormOppen
        }
    }
}
</script>