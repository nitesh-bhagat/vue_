<script setup>

import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    job: Object,

})

const showFullDescription = ref(false)

const truncatedDescription = computed(() => {
    let description = props.job?.description
    if (!showFullDescription.value) {
        description = description.substring(0, 90) + "..."

    }

    return description;

})

const toggleReadMoreButton = () => {
    showFullDescription.value = !showFullDescription.value
}

</script>

<template>
    <!-- Job Listing 1 -->
    <div class="bg-white rounded-xl shadow-md relative text-black">
        <div class="p-4">
            <div class="mb-6">
                <div class="text-gray-600 my-2">{{ job.type }}</div>
                <h3 class="text-xl font-bold">{{ job.title }}</h3>
            </div>

            <div class="mb-5">
                {{ truncatedDescription }}

                <button @click="toggleReadMoreButton" class="text-purple-600">
                    {{ `${showFullDescription ? "Less" : 'More'}` }}
                </button>
            </div>

            <h3 class="text-purple-500 mb-2">{{ job?.salary }} / Year</h3>

            <div class="border border-gray-100 mb-5"></div>

            <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                    <i class="pi pi-map-marker"></i>
                    {{ job?.location }}
                </div>
                <RouterLink :to="'/jobs/' + job.id"
                    class="h-[36px] bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                    View details
                </RouterLink>
            </div>
        </div>
    </div>
</template>