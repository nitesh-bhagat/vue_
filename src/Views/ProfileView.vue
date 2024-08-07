<script setup>
import Steps from '@/components/Steps.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const id = ref(route?.params?.id)



</script>


<template>

    <div class="flex flex-col min-h-screen max-h-screen">
        <div class="p-3 bg-purple-50 text-purple-700 cursor-pointer px-28 py-5 flex flex-row items-center gap-1 ">
            <i class="pi pi-angle-left"></i>
            <span>
                Back
            </span>
        </div>

        <div class="flex flex-row  px-28 py-5 gap-5 items-start ">
            <!-- profile bar -->
            <div class="flex flex-col w-1/3 shadow-md border rounded-lg">
                <div class="flex flex-col items-start  p-6 border-b">
                    <div class="rounded-full bg-purple-50 w-32 aspect-square flex flex-row items-center justify-center">
                        NB</div>

                    <span class="font-semibold mt-2">Nitesh Kumar Bhagat</span>
                    <span>@{{ id }}</span>
                    <span> <i class="pi pi-map-marker"></i> Bengaluru </span>
                    <span> <i class="pi pi-envelope"></i> nikubh1998@gmail.com</span>

                    <button class="bg-purple-500 my-2 p-2 w-full rounded-md text-white">
                        <i class="pi pi-file"></i>
                        <span>

                            View CV
                        </span>
                    </button>
                </div>

            </div>
            <!-- main content page -->
            <div class="flex flex-col w-full border  bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-purple-800 text-lg font-bold ">
                    Introduction
                </h3>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quisquam sit harum. Earum assumenda
                    sed sequi dolorum distinctio quam maxime ut natus tenetur sunt molestias, totam aliquid suscipit,
                    doloribus laboriosam.</span>

                <div class="mt-8"></div>
                <!-- Work Experice -->
                <h3 class="text-purple-800 text-lg font-bold ">
                    Work Experience
                </h3>

                <div class="w-full p-4 ">

                    <Steps title="Rehook.ai" tenure="2023-2024" designation="SDE" location="Bengaluru" />
                    <Steps title="CleverTap" tenure="2024-Current" designation="Associate" location="Bengaluru"
                        :isLast="true" />
                </div>

                <div class="mt-8"></div>


                <!-- Education -->
                <h3 class="text-purple-800 text-lg font-bold ">
                    Education
                </h3>

                <div class="w-full p-4 ">

                    <Steps title="Rehook.ai" tenure="2023-2024" designation="SDE" location="Bengaluru" />
                    <Steps title="CleverTap" tenure="2024-Current" designation="Associate" location="Bengaluru"
                        :isLast="true" />
                </div>


            </div>
        </div>
    </div>


</template>