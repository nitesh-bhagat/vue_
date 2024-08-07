<script setup>


defineProps({
    title: {
        type: String,
        default: "Hero Section Title"
    },
    subTitle: {
        type: String,
        default: "Hero Section Sub-title"
    },
})
</script>


<template>
    <section class="bg-purple-700 py-20 mb-4 overflow-hidden min-h-fit flex relative">
        <img class=" absolute -right-20 z-0 opacity-40 " src="https://cdni.iconscout.com/illustration/premium/thumb/job-application-illustration-download-in-svg-png-gif-file-formats--hiring-letter-profile-bio-data-details-personal-information-hr-pack-business-illustrations-1816233.png"
            alt="cover">
        <div class="max-w-7xl z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div class="text-center">
                <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                    {{ title }}
                </h1>
                <p class="my-4 text-2xl text-white">
                    {{ subTitle }}
                </p>
            </div>
            <button
                class="bg-purple-100/20 hover:scale-110 transition delay-100 p-3 min-w-44 max-w-80 rounded-md flex flex-row items-center justify-center gap-2 text-white">Explore
                <i class="pi pi-angle-double-right"></i></button>
        </div>
    </section>
</template>