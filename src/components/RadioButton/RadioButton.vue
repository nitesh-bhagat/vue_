<template>
  <div
    :class="[status ? 'bg-green-400 border-green-200' :'bg-slate-300', 'w-4 h-4 rounded-full border-4 relative cursor-pointer select-none']"
    @click="toggle"
  >
    <span class="absolute left-5 -top-2 ">label</span>
  </div>
</template>


<script>
export default {
  name: "RadioButton",
  data() {
    return {
      status: true
    };
  },
  methods: {
    toggle() {
      this.status = !this.status;
    }
  }
};
</script>