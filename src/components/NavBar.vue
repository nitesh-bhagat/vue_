<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router';
import NavMenuItem from '@/components/NavMenuItem.vue';

const showBannerMessage = ref(true)


const menuList = [
    {
        title: "Home",
        to: "/"
    },
    {
        title: "Jobs",
        to: "/jobs"
    },
    {
        title: "Explore",
        to: "/explore"
    },
    {
        title: "Sign in",
        to: "/sign-in"
    },
    {
        title: "Sign up",
        to: "/sign-up"
    },
    {
        title: "Create Job",
        to: "/create-job"
    },
]



const closeBannerMessage = () => {
    showBannerMessage.value = !showBannerMessage.value
}


</script>

<template>
    <div class="sticky top-0 z-20">


        <div v-show="showBannerMessage"
            class="flex flex-row bg-purple-900 w-full p-2 text-sm px-2  sm:px-6 lg:px-28 justify-between items-center text-white ">
            <span>
                Get new course for Free
            </span>
            <button @click="closeBannerMessage">

                <i class="pi pi-times"></i>
            </button>
        </div>
        <nav class="bg-purple-700 ">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="flex h-20 items-center justify-between">
                    <div class="flex flex-1 gap-2 items-center justify-center md:items-stretch md:justify-start">
                        <!-- Logo -->
                        <RouterLink to='/'>
                            <span class="text-4xl font-black skew-x-12 mr-2 text-white ">Zob.com</span>
                        </RouterLink>
                        <!-- search bar -->
                        <div
                            class="flex flex-row items-center rounded-md px-2  bg-purple-100/20 focus-within:bg-purple-100/40 focus-within:ring-2 focus-within:ring-purple-200 focus-within:flex-1  gap-2 text-white">
                            <i class="pi pi-search text-lg"></i>

                            <input type="text" placeholder="Search jobs"
                                class="bg-transparent flex-1 placeholder:text-purple-100 outline-none" />
                        </div>
                        <div class="md:ml-auto">
                            <div class="flex space-x-2">
                                <NavMenuItem v-for="menu in menuList" :key="menu.to" :title="menu.title"
                                    :link="menu.to" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>