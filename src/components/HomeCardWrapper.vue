<script setup>
import { RouterLink } from 'vue-router';
import Card from './Card.vue';
</script>


<template>
    <section class="py-14">
        <div class="container-xl lg:container m-auto">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg">
                <Card class="bg-red-100 col-span-2">
                    <h2 class="text-2xl font-bold">For Designers</h2>
                    <p class="mt-2 mb-4">
                        Browse our Vue jobs and start your career today
                    </p>
                    <RouterLink to='/jobs'
                        class="inline-block bg-red-300 text-red-600 hover:text-white rounded-lg px-4 py-2 hover:bg-red-400">
                        Browse Jobs
                    </RouterLink>
                </Card>
                <Card class="bg-purple-200 col-span-2 ">
                    <h2 class="text-2xl font-bold">For Developers</h2>
                    <p class="mt-2 mb-4">
                        Browse our Vue jobs and start your career today
                    </p>
                    <RouterLink to='/jobs'
                        class="inline-block bg-purple-400 text-white rounded-lg px-4 py-2 hover:bg-purple-700">
                        Browse Jobs
                    </RouterLink>
                </Card>
                <Card class="bg-yellow-100 col-span-1">
                    <h2 class="text-2xl font-bold">For Content Writer</h2>
                    <p class="mt-2 mb-4">
                        Browse our Vue jobs and start your career today
                    </p>
                    <RouterLink to='/jobs'
                        class="inline-block bg-yellow-300 text-black rounded-lg px-4 py-2 hover:bg-yellow-500">
                        Browse Jobs
                    </RouterLink>
                </Card>
                <Card class="bg-teal-200 col-span-1">
                    <h2 class="text-2xl font-bold">For Sales</h2>
                    <p class="mt-2 mb-4">
                        Browse our Vue jobs and start your career today
                    </p>
                    <RouterLink to='/jobs'
                        class="inline-block bg-teal-300  text-white rounded-lg px-4 py-2 hover:bg-teal-400 ">
                        Browse Jobs
                    </RouterLink>
                </Card>
                <Card class="bg-pink-200 col-span-1">
                    <h2 class="text-2xl font-bold">For Marketing</h2>
                    <p class="mt-2 mb-4">
                        Browse our Vue jobs and start your career today
                    </p>
                    <RouterLink to='/jobs'
                        class="inline-block bg-pink-300 text-white rounded-lg px-4 py-2 hover:bg-pink-400">
                        Browse Jobs
                    </RouterLink>
                </Card>
                <Card class="bg-violet-100 col-span-1">
                    <h2 class="text-2xl font-bold">For Finances</h2>
                    <p class="mt-2 mb-4">
                        Browse our Vue jobs and start your career today
                    </p>
                    <RouterLink to='/jobs'
                        class="inline-block bg-violet-300 text-white rounded-lg px-4 py-2 hover:bg-violet-400">
                        Browse Jobs
                    </RouterLink>
                </Card>
            </div>
        </div>
    </section>

</template>