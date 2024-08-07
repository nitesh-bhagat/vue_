<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
    <div class="flex flex-col items-center justify-center min-h-screen max-h-screen w-full bg-purple-50">


        <div class="flex flex-col bg-white shadow-md rounded-md p-3 w-1/4  gap-3 ">
            <h1 class="text-center text-xl font-bold">Sign In</h1>

            <span class="text-center">continue by sign in to your account</span>

            <div
                class="flex flex-row items-center rounded-md px-2 py-2  bg-purple-100/40 ring-2 ring-purple-200 focus-within:bg-purple-200 focus-within:ring-2 focus-within:ring-purple-300 focus-within:flex-1  gap-2 text-purple-400">
                <i class="pi pi-at text-lg text-purple-400"></i>

                <input type="text" placeholder="Email"
                    class="bg-transparent flex-1 placeholder:text-purple-400 outline-none" />
            </div>

            <div
                class="flex flex-row items-center rounded-md px-2 py-2  bg-purple-100/40 ring-2 ring-purple-200 focus-within:bg-purple-200 focus-within:ring-2 focus-within:ring-purple-300 focus-within:flex-1  gap-2 text-purple-400">
                <i class="pi pi-key text-lg text-purple-400"></i>

                <input type="text" placeholder="******"
                    class="bg-transparent flex-1 placeholder:text-purple-400 outline-none" />
            </div>


            <button class="bg-purple-700 text-white p-2 rounded-md"> Sign In</button>

            <span class="text-center">Or</span>

            <RouterLink to="/sign-up" class="text-center">Sign up </RouterLink>
            <RouterLink to="/" class="text-center">Go back home </RouterLink>


        </div>
    </div>
</template>