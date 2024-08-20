<template>
 <div class="flex flex-row w-full bg-neutral-100 p-5">
<div class="skew-x-6">JusetTODO </div>

 </div>


 <div class="flex flex-col p-6 items-center justify-center w-full">
    <span>{{ getTodoList }}</span>
 </div>
</template>


<script >

export default {
    data(){
        return {
            count:1,
        }
    },
    computed:{
        getTodoList(){
            return this.$store.state.todolist.length;
        }
    }
}

</script>

<style scoped></style>