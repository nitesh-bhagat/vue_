<template>
    <div class="flex flex-col relative" ref="dropdown">
        <div class="flex flex-row items-center gap-2 border rounded-md p-2 cursor-pointer select-none"
            @click="toggleProfileMenu">
            <img class="w-10 h-10 rounded-lg"
                src="https://media.licdn.com/dms/image/v2/D5603AQGpNj-C-1maqA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689247500959?e=1729728000&v=beta&t=zmernVeqzX6QSHjAp0Hdik2IW_ObFHnflDkMbY8PX3Q"
                alt="Nitesh">
            <div class="flex flex-col">
                <span class="text-xs">Logged in as</span>
                <span class="font-semibold">Nitesh Bhagat</span>
            </div>
            <i class="pi pi-angle-down"></i>
        </div>

        <div v-show="isOpen"
            class="min-h-fit max-h-72  overflow-scroll w-full absolute z-20 top-16 bg-white shadow-md rounded-md">
            <MenuTile title="Profile" icon="pi-user"></MenuTile>
            <MenuTile title="Setting" icon="pi-cog"></MenuTile>
            <MenuTile title="Help" icon="pi-info-circle"></MenuTile>
            <MenuTile title="Logout" icon="pi-sign-out"></MenuTile>
        </div>

    </div>
</template>

<script>
import MenuTile from '../MenuTile.vue';

export default {
    data() {
        return {
            isOpen: false,
        }
    },
    components:{
        MenuTile,
    },
    methods: {
        toggleProfileMenu() {
            this.isOpen = !this.isOpen;
        },
        closeDropdown(){
            this.isOpen = false;
        },
        handleClickOutside(event){
            const dropdown = this.$refs.dropdown;

            if(dropdown && !dropdown.contains(event.target)){
                this.closeDropdown()
            }
        }

    },
    mounted(){
        document.addEventListener('mousedown', this.handleClickOutside)
    },
    beforeDestroy(){
        document.removeEventListener('mousedown', this.handleClickOutside)
    }
}
</script>