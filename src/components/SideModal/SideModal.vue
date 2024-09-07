<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50"
    @click.self="closeModal"
  >
    <div
      class="w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300"
      :class="{ 'translate-x-full': !isModalOpen, 'translate-x-0': isModalOpen }"
    >
      <button @click="closeModal" class="close-btn mt-4 ml-4 p-2 bg-gray-200">Close</button>
      <!-- Add your modal content here -->
      <div class="p-4">This is the sliding modal content.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideModal",
  data() {
    return {
      isVisible: false, // Controls the visibility of the overlay
      isModalOpen: false // Controls the sliding animation
    };
  },
  methods: {
    openModal() {
      this.isVisible = true;
      setTimeout(() => {
        this.isModalOpen = true;
      }, 10); // Delay to allow the transition to occur
    },
    closeModal() {
      this.isModalOpen = false;
      setTimeout(() => {
        this.isVisible = false;
      }, 300); // Match this duration with the CSS transition duration
    }
  }
};
</script>

<style scoped>
/* Optional custom styles */
</style>
