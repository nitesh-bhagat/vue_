<template>
  <div
    class="flex flex-col relative cursor-pointer  items-center justify-center hover:scale-105"
    @mouseenter="show"
    @mouseleave="hide"
  >
    <slot />

    <div
      v-show="showPopover"
      class="absolute min-w-72 flex flex-col items-center bottom-6  text-white text-sm  "
    >
      <div class="bg-black/70 min-w-fit py-1 px-3 rounded-full">{{ content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popover",
  data() {
    return {
      showPopover: false
    };
  },
  props: {
    content: {
      type: String,
      default: "Popover",
      required: false
    }
  },
  methods: {
    show() {
      this.showPopover = true;
    },
    hide() {
      this.showPopover = false;
    }
  }
};
</script>