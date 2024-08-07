<script setup>
import jobData from '@/jobs.json'
import { ref } from 'vue'
import JobCard from '@/components/JobCard.vue';
import { RouterLink } from 'vue-router';


defineProps({
    limit: Number,
})
const jobList = ref(jobData?.jobs)

</script>


<template>


    <div class="w-full bg-purple-100 p-20  gap-10 flex flex-col items-center">
        <div class="flex flex-col items-center gap-2">

            <h2 class="text-3xl font-bold text-purple-500  text-center">
                Browse Jobs
            </h2>
            <span class="text-lg">Discover a World of Career Opportunities and Find Your Perfect Job</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <JobCard v-for="job in jobList.slice(0, limit || jobList.length)" :key="job?.id" :job="job" />

        </div>

        <RouterLink to="/jobs" class="bg-purple-400 hover:bg-purple-700 hover:scale-110 transition delay-100 p-3 min-w-44 max-w-80 rounded-md flex flex-row items-center justify-center gap-2 text-white">View more jobs</RouterLink>
    </div>


</template>