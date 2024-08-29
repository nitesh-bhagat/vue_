<template>
  <div class="flex flex-col relative" ref="dropdown">
    <div
      class="flex flex-row items-center gap-2 border py-2 px-2 rounded-md cursor-pointer select-none"
      @click="toggleBoardMenu"
    >
      <!-- Select Item -->
      <div v-if="getSelectedBoard" class="flex flex-col min-w-48 max-w-48">
        <span class="text-sm font-bold truncate w-42">{{ getSelectedBoard.name }}</span>
        <span class="text-xs">{{getSelectedBoard.participants}} participants</span>
      </div>
      <i class="pi pi-angle-down"></i>
    </div>
    <!--Popup list  -->
    <div
      v-show="isOpen"
      class="w-full absolute z-20 top-14 bg-white shadow-md rounded-md overflow-hidden"
    >
      <div class="flex flex-col min-h-fit max-h-72 overflow-scroll p-2">
        <div
          @click="switchBoard(index)"
          v-for="(borad, index) in boardList"
          :key="index"
          :class="[index === selectedBoardIndex && 'border bg-slate-100', 'flex flex-row hover:bg-slate-50 cursor-pointer  p-2 rounded-md items-center justify-between']"
        >
          <div class="flex flex-col">
            <span class="text-sm">{{ borad.name }}</span>
            <span
              class="text-xs text-slate-500"
            >{{ borad.participants }} participants | {{ borad.board_type }}</span>
          </div>
          <i class="pi pi-angle-right"></i>
        </div>
      </div>

      <div class="p-2">
        <RouterLink to="/create-board">
          <button
            class="p-1 rounded-md flex items-center justify-center w-full hover:bg-green-400 hover:text-white text-sm"
            @click="isOpen = false"
          >Create new board</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { mapState } from "vuex";

export default {
  name: "SelectBoard",
  data() {
    return {
      isOpen: false
    };
  },
  components: {
    RouterLink
  },
  computed: {
    ...mapState(["boardList", "selectedBoardIndex"]),
    getSelectedBoard() {
      console.log();
      return this.boardList[this.selectedBoardIndex];
    }
  },
  methods: {
    async switchBoard(newBoardIndex) {
      this.isOpen = false;

      this.$store.dispatch("changeBoard", newBoardIndex);
    },
    // Handler function
    toggleBoardMenu() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    handleClickOutside(event) {
      const dropdown = this.$refs.dropdown;
      if (dropdown && !dropdown.contains(event.target)) {
        this.closeDropdown();
      }
    }
  },
  mounted() {
    document.addEventListener("mousedown", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
};
</script>