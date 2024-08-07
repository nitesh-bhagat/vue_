<script setup>

defineProps({
    title: String,
    tenure: String,
    location: String,
    designation: String,
    isLast: Boolean,
})

</script>


<template>
    <div :class="[!isLast && 'border-l-2', 'flex flex-row gap-4 relative  min-h-20 px-6']">
        <div class="rounded-full w-6 aspect-square bg-purple-600 absolute -left-3" />

        <div class="flex flex-col gap-1">
            <span class="font-medium">{{ title }}</span>

            <div class="flex flex-row gap-3 font-light">
                <span> <i class="pi pi-calendar"></i> {{ tenure }}</span>
                <span> <i class="pi pi-map-marker"></i> {{ location }}</span>
                <span> <i class="pi pi-briefcase"></i> {{ designation }}</span>
            </div>

        </div>

    </div>
</template>