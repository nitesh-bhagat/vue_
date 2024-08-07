<script setup>
import HomeCardWrapper from '@/components/HomeCardWrapper.vue';
import JobListingSection from '@/components/JobListingSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import TopTalent from '@/components/TopTalent.vue';

</script>


<template>
    <HeroSection title="Browse Millions of Job!" subTitle="Get Latest and Hottest JOBS in the market" />
    <HomeCardWrapper />
    <JobListingSection :limit="3" />
    <TopTalent />

</template>