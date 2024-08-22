<template>
    <div ref="wrapper" class="dropdown-wrapper">
      <button @click="toggleDropdown">Toggle Dropdown</button>
      <div v-if="isOpen" class="dropdown" >
        <!-- Dropdown content goes here -->
        <p>Dropdown Item 1</p>
        <p>Dropdown Item 2</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      closeDropdown() {
        this.isOpen = false;
      },
      handleClickOutside(event) {

        const wrapper = this.$refs.wrapper;
  
        // Check if the click is outside the wrapper and dropdown
        if (wrapper && !wrapper.contains(event.target)) {
          this.closeDropdown();
        }
      },
    },
    mounted() {
      // Use mousedown to detect clicks outside before Vue handles them
      document.addEventListener('mousedown', this.handleClickOutside);
    },
    beforeDestroy() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  .dropdown-wrapper {
    position: relative;
  }
  
  .dropdown {
    position: absolute;
    background: white;
    border: 1px solid #ddd;
    /* Additional styling */
  }
  </style>
  