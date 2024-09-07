<template>
  <div
    class="flex flex-row min-w-fit bg-gray-50 p-2 rounded-md items-center gap-2 focus-within:ring-1 focus-within:ring-black"
  >
    <slot name="prefix" />
    <input
      class="bg-transparent flex-grow outline-none"
      :placeholder="placeholder"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <slot name="suffix" />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: { placeholder: String, modelValue: String }
  //   inheritAttrs: false
};
</script>