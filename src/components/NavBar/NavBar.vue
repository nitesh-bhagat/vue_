<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-row px-3 pt-3 gap-2 items-center">
      <!-- logo -->
      <h1 class="mr-auto text-4xl font-bold text-green-500">
        Score
        <span class="text-black">pion</span>
      </h1>

      <!-- Board Dropdown -->
      <SelectBoard />

      <!-- Logged in Account -->
      <ProfileMenu />
    </div>
    <!-- TabList -->
    <div class="flex flex-row w-full">
      <RouterLink
        v-for="(menu, index) in getTabList"
        :key="index"
        :to="menu.href"
        :class="[getCurrentTab === index && 'text-green-500  border-green-500', 'border-b-2 py-2 px-4 cursor-pointer']"
        @click="switchTab(index)"
      >{{ menu.title }}</RouterLink>
      <div class="flex-1 border-b-2"></div>
    </div>
  </div>
</template>
  
  <script>
import { RouterLink } from "vue-router";
import ProfileMenu from "../DropDown/ProfileMenu.vue";
import SelectBoard from "../DropDown/SelectBoard.vue";
import SelectMenu from "../DropDown/SelectMenu.vue";
import MenuTile from "../MenuTile.vue";

export default {
  name: "NavBar",
  components: {
    MenuTile,
    SelectBoard,
    SelectMenu,
    ProfileMenu,
    RouterLink
  },
  data() {
    return {
      oppenProfileMenu: false
    };
  },

  computed: {
    getTabList() {
      return this.$store.state.menu_list;
    },
    getCurrentTab() {
      return this.$store.state.selectedTabIndex;
    }
  },
  methods: {
    toggleProfileMenu() {
      this.oppenProfileMenu = !this.oppenProfileMenu;
    },
    switchTab(index) {
      this.$store.dispatch("changeTab", index);
    }
  }
};
</script>