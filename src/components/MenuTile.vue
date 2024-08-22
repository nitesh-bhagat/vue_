<template>

    <div class="flex flex-row gap-2 hover:bg-slate-50 p-2 items-center cursor-pointer px-3">
        <i :class="['pi text-sm', icon]"></i>
        <span class="text-sm">{{ title }}</span>
    </div>

</template>


<script>
export default {
    name:"MenuTile",
    props:[
        "title",
        "icon"
    ]
}
</script>