<template>
    <div :class="[person.standing===1&&'scale-100', 'flex flex-row  gap-2 items-center border-b py-2 bg-white' ]">
        <span :class="[standing===1?'text-5xl text-green-500':'text-3xl', 'w-16 ']">#{{ standing }}</span>
        <img :src="person.image" :alt="person.name" class="w-12 rounded-md">
        <div class="flex flex-col">
            <span>{{ person.name }}</span>
            <span class="text-sm font-bold">{{ person.points }} Points</span>
        </div>
        <div class="flex flex-row items-center ml-auto">

            <i class="pi pi-bolt text-xl text-amber-500"></i>
            <span>{{ getXP??0 }}</span>
        </div>
    </div>
</template>

<script>
export default{
    name:"PeopleTile",
    props:[
        'person',
        'standing'   
    ],
    computed:{
        getXP(){
    return Number(this.person.total_goal / this.person.total_matches )
        }
    }
}
</script>