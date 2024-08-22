<template>
    <div class="flex flex-row w-full border rounded-md p-3 justify-around items-center relative">
   
        <div v-for="(participant, index) in match.participants_id" class="flex flex-row gap-4 w-72 items-center bg-slate-5 border p-2 rounded-md bg-slate-50">

            <img :src="getParticipants(participant).image" class="w-12 rounded-md">
            <div class="flex flex-col  rounded-md  relative">

                <span>{{ getParticipants(participant).name }}</span>
                <span class="text-sm font-semibold">0.2XP</span>

            <span v-show="match.winner === participant" class="absolute -rotate-[25deg] text-green-700 -top-4 -left-24 font-bold border-2 opacity-70 py-0.5 px-1 rounded-md border-green-500 border-dashed bg-green-400/40" >Winner</span>

            </div>
            <div class="mx-auto"></div>
            <span :class="['text-3xl p-2']" >{{ match.score[index] }}</span>

        </div>

        <span class="text-red-500 text-3xl absolute font-black">V/S</span>
      
    </div>
</template>

<script>
export default{
    name:"MatchCard",
    props:[
        "match"
    ],
    computed:{
        getParticipants(){
            return param => this.$store.state.people.filter((item)=>item.id===param)[0];
        }
    },
}
</script>