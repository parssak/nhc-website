<script setup>
  import { ChevronDoubleRightIcon } from "@heroicons/vue/solid";
  import { defineProps } from "vue";

  const { items } = defineProps({
    items: Array,
  });
</script>

<template>
  <ul class="unstyled space-y-2">
    <li v-for="(item, index) in items" :key="index" class="flex items-start">
      <ChevronDoubleRightIcon
        class="text-accent w-4 h-4 mt-1 flex-shrink-0 mr-3"
      />
      <!-- <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-accent w-4 h-4 mt-1 flex-shrink-0 mr-3">
<path d="M10.8333 14.1666L15 9.99992L10.8333 5.83325" stroke="#0A5D70" stroke-width="2" stroke-linecap="square"/>
<path d="M5 14.1666L9.16667 9.99992L5 5.83325" stroke="#0A5D70" stroke-width="2" stroke-linecap="square"/>
</svg> -->

      {{ item }}
    </li>
  </ul>
</template>
