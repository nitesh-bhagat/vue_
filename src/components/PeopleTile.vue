<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';


const { title, subtitle } = defineProps({
    title: String,
    subtitle: String,
    image: {
        type: String,
    }
})


const getFirstLetters = computed(() => {
    // Split the sentence into words
    const words = title?.split(' ');

    // Map each word to its first letter
    const firstLetters = words?.map(word => word?.charAt(0));

    // Join the first letters into a string
    return firstLetters?.join('');
})
</script>

<template>



    <RouterLink to="/profile/nitesh">

        <div class="flex flex-row items-center relative">
            <div
                class="rounded-full bg-purple-100 border-2 border-purple-600 aspect-square w-16 flex items-center justify-center absolute -ml-10">
                {{ getFirstLetters }}
            </div>
            <div class="flex flex-col bg-white px-8 rounded-md py-2 shadow-sm">
                <span class="font-semibold text-sm">{{ title }}</span>
                <span class="text-xs">{{ subtitle }}</span>
            </div>

        </div>
    </RouterLink>


</template>