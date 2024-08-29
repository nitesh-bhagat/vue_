<template>
  <div class="flex flex-col relative" ref="dropdown">
    <div
      @click="toggleDropdown"
      class="flex flex-row items-center gap-2 border py-2 px-2 rounded-md cursor-pointer select-none"
    >
      <!-- Select Item -->
      <div v-if="selectedItem !== null" class="flex flex-col flex-grow">
        <span class="text-sm truncate">
          {{ selectedItem.name
          }}
        </span>
      </div>
      <span v-else class="flex-1 opacity-15">{{ placeholder }}</span>
      <i class="pi pi-angle-down"></i>
    </div>
    <div
      v-if="isOpen"
      class="w-full absolute z-20 border translate-y-12 left-0 bg-white shadow-md rounded-md overflow-hidden"
    >
      <!-- header -->
      <div v-if="showFooterAction" class>
        <Input
          placeholder="Enter name"
          v-model="inputValue"
          :autofocus="true"
          :class="[' focus-within:right-0 focus-within:ring-white ']"
        />
      </div>
      <!-- main -->
      <div class="flex flex-col border min-h-fit max-h-72 overflow-scroll p-2" ref="scrollOnMe">
        <div
          v-for="(item, index) in filteredChildren"
          @click="onChange(index)"
          :key="index"
          :class="[index === selectedItemIndex && 'border bg-slate-50', 'flex flex-row hover:bg-slate-50 cursor-pointer  p-2 rounded-md items-center justify-between']"
        >
          <div class="flex flex-col">
            <span class="text-sm">{{ item.name }}</span>
          </div>
        </div>
      </div>
      <!-- footer  -->
      <div v-if="showFooterAction" class="p-2">
        <RouterLink to="/create-board">
          <button
            class="p-1 rounded-md flex items-center justify-center w-full bg-green-400 text-white text-sm"
            @click="isOpen = false"
          >Create new board</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Input from "../Input/Input.vue";

export default {
  data() {
    return {
      isOpen: false,
      inputValue: ""
    };
  },
  props: {
    children: Array,
    selectedItem: [Object, null],
    placeholder: String,
    showFooterAction: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Input
  },
  computed: {
    filteredChildren() {
      const val = this.children.filter(item =>
        this.inputValue.length === 0
          ? true
          : item.name.toLowerCase().includes(this.inputValue.toLowerCase())
      );

      return val;
    },
    selectedItemIndex() {
      return this.children.findIndex(item =>
        this.selectedItem !== null ? item.id === this.selectedItem.id : 0
      );
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
      this.scrollToElement();
    },
    closeDropdown() {
      this.isOpen = false;
    },
    onChange(index) {
      this.isOpen = false;
      this.$emit("onChange", this.children[index]);
    },
    scrollToElement() {
      const el = this.$refs.dropdown;

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    handleClickOutside(event) {
      const wrapper = this.$refs.dropdown;
      // Check if the click is outside the wrapper and dropdown
      if (wrapper && !wrapper.contains(event.target)) {
        this.closeDropdown();
      }
    }
  },
  mounted() {
    // Use mousedown to detect clicks outside before Vue handles them
    document.addEventListener("mousedown", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
};
</script>
  
<style scoped>
</style>
  