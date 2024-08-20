<script setup>
import SideNavBar from '@/components/issue-tracker/SideNavBar.vue';
import NavBar from '@/components//NavBar.vue';
import FooterSection from '@/components/FooterSection.vue';
import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';



const route = useRoute();

const showNavbar = computed(() => {
  return route.path !== '/sign-in' && route.path !== '/sign-up';
});
</script>

<template>
  
<SideNavBar></SideNavBar>
</template>



<!-- <NavBar v-if="showNavbar" />
  <RouterView />
  <FooterSection v-if="showNavbar" /> -->

