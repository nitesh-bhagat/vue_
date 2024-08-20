<script setup>

import { RouterLink, useRoute } from 'vue-router';



const props = defineProps({
    link: {
        type: String,
        default: "/"
    },
    title: {
        type: String,
        default: "Menu",
    }
})

const isActiveLink = (routePath) => {

    const route = useRoute()


    return route.path === routePath;
}


</script>

<template>

    <RouterLink :to="link" :class="[
        isActiveLink(link)
            ? 'bg-purple-900'
            : 'hover:bg-gray-900 hover:text-white',
        'text-white',
        'px-3',
        'py-2',
        'rounded-md',
    ]">{{ title }}</RouterLink>

</template>