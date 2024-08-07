<script setup>
import PeopleTile from '@/components/PeopleTile.vue'

</script>


<template>
    <div class="flex flex-col px-24 py-32">
        <div class="flex flex-col items-center justify-center gap-1">
            <div class=" py-3   w-full h-72 gap-5 items-start relative">
                <div
                    class="flex flex-col  z-20  gap-2 w-full h-full bg-purple-50 items-center justify-center rounded-xl shadow-sm ">
                    <h2 class="text-5xl font-extrabold text-purple-500 text-center ">
                        Top Talents
                    </h2>
                    <span class="w-96 text-center">Connect with Exceptional Professionals and Uncover the Best Talent for Your Team</span>
                </div>

                <div class="absolute bottom-2 left-3">
                    <PeopleTile title="Nitesh Bhagat" subtitle="Frontend Dev" />
                </div>
                <div class="absolute bottom-[3rem] right-[12rem]">
                    <PeopleTile title="Ansh Mishra" subtitle="Full Stack Dev" />
                </div>
                <div class="absolute top-[2rem] right-[18rem]">
                    <PeopleTile title="Vishal Prajapati" subtitle="Frontend Dev" />
                </div>
                <div class="absolute top-[2rem] left-[18rem]">
                    <PeopleTile title="Himanshu P Gupta" subtitle="Backend Dev" />
                </div>

                <div class="absolute bottom-[1rem] left-[22rem]">
                    <PeopleTile title="Rupam Karmakar" subtitle="Backend Dev" />
                </div>
                <div class="absolute bottom-[1rem] right-[1rem]">
                    <PeopleTile title="Girish Mali" subtitle="Content Writer" />
                </div>
                <div class="absolute bottom-[8rem] right-[6rem]">
                    <PeopleTile title="Karan Shaw" subtitle="Business Analyst" />
                </div>
                <div class="absolute top-2 right-3">
                    <PeopleTile title="Rahul Singh" subtitle="Flim-making" />
                </div>

                <div class="absolute top-2 left-3">
                    <PeopleTile title="Ananya Shaho" subtitle="UI/UX Expert" />
                </div>
                <div class="absolute top-20 left-24">
                    <PeopleTile title="Akansha Gupta" subtitle="Graphics Designer" />
                </div>
                <div class="absolute top-[10rem] left-[12rem]">
                    <PeopleTile title="Tushar Singh" subtitle="Frontend Dev" />
                </div>

                <div class="absolute top-[10rem] left-[12rem]">
                    <PeopleTile title="Prakash Gupta" subtitle="Frontend Dev" />
                </div>



            </div>

        </div>
    </div>
</template>