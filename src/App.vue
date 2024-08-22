<template>


  <div class="flex flex-row bg-slate-50 gap-0 items-center justify-center min-h-screen ">


    <div class="w-2/3 bg-white min-h-screen">
      <RouterView />
    </div>



  </div>

</template>


<script>
import { RouterView } from 'vue-router';



export default {
  name: "App",

}

</script>
