<script setup>
const exploreFeed = [
    {
        title: "Architect",
        class: "bg-red-100 text-red-500   col-span-2 ",
    },
    {
        title: "Software Developer",
        class: "bg-green-100 text-green-500   col-span-2 ",
    },
    {
        title: "Content Writter",
        class: "bg-yellow-100 text-yellow-500   col-span-3 ",
    },
    {
        title: "MBA",
        class: "bg-sky-100 text-sky-500   col-span-2 ",
    },
    {
        title: "Teacher",
        class: "bg-lime-100 text-lime-500   col-span-1 ",
    },
    {
        title: "IT Expert",
        class: "bg-cyan-100 text-cyan-500   col-span-1 ",
    },
    {
        title: "Actor",
        class: "bg-orange-100 text-orange-500   col-span-1 ",
    },
    {
        title: "Graphics Designer",
        class: "bg-pink-100 text-pink-500   col-span-2 ",
    },
    {
        title: "Marketing management",
        class: "bg-indigo-100 text-indigo-500   col-span-3 ",
    },
    {
        title: "Sales",
        class: "bg-fuchsia-100 text-fuchsia-500   col-span-3 ",
    },
    {
        title: "More",
        class: "bg-orange-100 text-orange-500   col-span-1 ",
    },
];
</script>

<template>
    <div class="flex flex-col gap-12 bg-purple-50 text-black px-28 py-12 w-full">

        <div class="flex flex-col gap-1 ">

            <h1 class="text-3xl font-bold text-purple-500">Explore Careers</h1>
            <span class="text-lg">Navigate a Vast Array of Career Paths and Unlock Your Potential</span>
        </div>

        <div class="grid grid-cols-7 gap-3">
            <div :class="[
                tile.class,
                'h-48 w-full flex flex-row items-center justify-center rounded-md text-xl shadow-md hover:scale-110 transition delay-50 cursor-pointer',
            ]" v-for="tile in exploreFeed" :key="tile.title">
                {{ tile.title }}
            </div>
        </div>
    </div>
</template>
