<template>
 <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-3xl font-bold">Create Board</h1>
    <input type="text" placeholder="Name of the board" class="bg-red-400 border p-2 outline-none focus:ring-1 focus:ring-green-400">
    <select>
        <option value="RocketLeague">RocketLeague</option>
    </select>
 </div>
</template>


<script>
export default{
    name:"CreateBoard"
}
</script>