<template>

    <div class="flex flex-col relative w-full gap-2">


        <div class="flex flex-row items-center justify-around w-full border rounded-md px-2 py-5 ">

            <div class="flex flex-col items-center gap-1">
                <span class="text-xs">Select Player 1 </span>

                <select placeholder="Select player" v-model="form.player1_id"  id="type" name="type" class="border rounded w-full py-2 px-3">
                    <option v-for="person in getPeople" :value="person.id">{{ person.name }}</option>
                </select>

                <input v-model="form.player1_score" type="text" placeholder="score" class="outline-none w-16 text-center  text-2xl">

            </div>


            <div class="flex flex-col items-center gap-1">
                <span class="text-xs">Select Player 2 </span>

                <select placeholder="Select player" v-model="form.player2_id" id="type" name="type" class="border rounded w-full py-2 px-3">
                    <option v-for="person in getPeople" :value="person.id">{{ person.name }}</option>
                </select>

                <input v-model="form.player2_score" type="text" placeholder="score" class="outline-none w-16 text-center  text-2xl">

            </div>

       

            <span class="text-gray-400 text-3xl absolute font-black ">V/S</span>
        </div>
        <div class="flex flex-row items-end justify-end w-full ">
            <button @click="submitGame" class="bg-green-500 px-6 py-1 text-white rounded-md">Save</button>
        </div>
    </div>



</template>

<script>

export default {
    name: "MatchForm",
    data() {
        return {

            form: {
                id:'cbwcbwecb134',
                player1_id:'',
                player2_id:'',
                player1_score:null,
                player2_score:null,
     

            },

        }
    },
    computed: {
        getPeople() {
            return this.$store.state.people;
        },
        getGameWinnerId(){
            if(this.form.player1_score>this.form.player2_score){
                return this.form.player1_id
            }else{
                return this.form.player2_id
            }
        }
    },
    methods:{
        submitGame(){

            const matchData = {
                id:this.form.id,
                participants_id:[
                this.form.player1_id,this.form.player2_id
                ],
                score:[
                this.form.player1_score,this.form.player2_score
                ],
                winner:this.getGameWinnerId
            }



            this.$store.dispatch('AddMatch', matchData)

            this.form= {
                id:'',
                player1_id:'',
                player2_id:'',
                player1_score:null,
                player2_score:null,
     

            }

        }
    }
}
</script>