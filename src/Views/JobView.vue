<script setup>
import JobCard from '@/components/JobCard.vue';

import axios from 'axios'
import { onMounted, ref } from 'vue'

defineProps({
    limit: Number,
})
const jobList = ref([])




onMounted(async () => {
    try {
        const resp = await axios.get("http://localhost:4000/jobs");
        jobList.value = resp.data;
    } catch (error) {
        console.log('Error loading jobs:', error)
    }
})
</script>


<template>

    <div class="flex flex-col gap-12 bg-purple-50 text-black px-28 py-12 w-full">

        <div class="flex flex-col gap-1 ">

            <h1 class="text-3xl font-bold text-purple-500">Browse Jobs</h1>
            <span class="text-lg">Discover a World of Career Opportunities and Find Your Perfect Job</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <JobCard v-for="job in jobList.slice(0, limit || jobList.length)" :key="job?.id" :job="job" />
        </div>
    </div>
</template>