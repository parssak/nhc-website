<script>
  export default {
    props: {
      leadingChevron: {
        type: Boolean,
        default: false,
      },
      trailingChevron: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<template>
  <button class="btn group">
    <svg
      v-if="leadingChevron"
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="transition-all rotate-180 transform group-hover:-translate-x-1 w-4 h-4 mr-2"
    >
      <path
        d="M1.5 12L6.5 7L1.5 2"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="square"
      />
    </svg>
    <slot></slot>
    <svg
      v-if="trailingChevron"
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="transition-all transform group-hover:translate-x-1 w-4 h-4 ml-2"
    >
      <path
        d="M1.5 12L6.5 7L1.5 2"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="square"
      />
    </svg>
  </button>
</template>
