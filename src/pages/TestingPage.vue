<template>
  <div class="flex flex-col items-center w-1/2 mx-auto justify-center min-h-screen gap-3">
    <h1 class="text-3xl font-bold">Custom Component</h1>
    <span
      class="text-center"
    >These are custom made components written in vue.js (Optional api). Styling part done via Tailwindcss</span>

    <div class="flex flex-col items-start border w-full p-10 gap-3">
      <!-- INPUT -->
      <span class="text-slate-300">Input</span>
      <Input
        placeholder="Enter name"
        v-model="inputValue"
        :class="['bg-green-100 focus-within:right-2 focus-within:ring-green-400 w-full']"
      />

      <!-- SELECT -->
      <span class="text-slate-300">Select Menu</span>
      <SelectMenu
        :children="optionsList"
        :selectedItem="selectedItem"
        :showFooterAction="true"
        :class="['w-full']"
        placeholder="Select people"
        @onChange="setSelectedMenu"
      />

      <!-- RADIO BUTTON -->
      <span class="text-slate-300">Radio Button</span>
      <RadioButton />

      <!-- POPOVER -->
      <span class="text-slate-300">Popover</span>
      <Popover content="Hello this is a popover">
        <h1>Hove on me!</h1>
      </Popover>
    </div>

    <RouterLink to="/" class="py-2">Back to home</RouterLink>
  </div>
</template>
<script>
import SelectMenu from "@/components/DropDown/SelectMenu.vue";
import Input from "@/components/Input/Input.vue";
import MenuTile from "@/components/MenuTile.vue";
import Popover from "@/components/Popover/Popover.vue";
import RadioButton from "@/components/Radio/RadioButton.vue";
import { RouterLink } from "vue-router";

export default {
  name: "TestingPage",
  components: {
    Input,
    RouterLink,
    SelectMenu,
    MenuTile,
    RadioButton,
    Popover
  },
  data() {
    return {
      inputValue: "",
      isKeepMeLoggedIn: false,
      appList: [
        { id: 0, name: "Cricket" },
        { id: 1, name: "Footbal" }
      ],
      selectedApp: null,
      optionsList: [
        { id: 0, name: "Nitesh" },
        { id: 1, name: "Ansh" },
        { id: 2, name: "Vishal" },
        { id: 3, name: "Prakash" },
        { id: 4, name: "Md" },
        { id: 5, name: "Shayan Mondal" },
        { id: 6, name: "Tushar Singh" },
        { id: 7, name: "Nikhil Goyal" },
        { id: 8, name: "Vinay Shakya" },
        { id: 9, name: "Akshay Suhag" },
        { id: 10, name: "Akhil Suhag" },
        { id: 11, name: "Mukul Anand" },
        { id: 12, name: "Tushar Dhara" }
      ],
      selectedItem: null
    };
  },
  methods: {
    setSelectedMenu(selectedOption) {
      this.selectedItem = selectedOption;
    },
    setSelectedApp(selectedOption) {
      this.selectedApp = selectedOption;
    }
  }
};
</script>