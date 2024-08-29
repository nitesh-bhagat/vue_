<template>
  <div
    :class="[value?'justify-start':'justify-end', 'flex flex-row rounded-full bg-slate-100 w-10 border h-6 transition delay-300 cursor-pointer']"
    @click="onChange"
  >
    <div :class="[value?'bg-slate-300':'bg-green-400', 'w-6 h-6  rounded-full']"></div>
  </div>
</template>


<script>
export default {
  name: "RadioButton",
  data() {
    return {
      value: false
    };
  },
  methods: {
    onChange() {
      this.value = !this.value;
    }
  }
};
</script>