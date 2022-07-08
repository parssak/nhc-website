<template>
  <span class="relative z-0 inline-flex shadow-sm rounded-md">
    <button
      type="button"
      class="
        relative
        inline-flex
        items-center
        px-2
        py-2
        rounded-l-md
        border border-gray-300
        bg-white
        text-sm
        font-medium
        text-gray-500
        hover:bg-gray-50
        focus:z-10
        focus:outline-none
        focus:ring-1
        focus:ring-accent
        focus:border-accent
      "
      @click="decrement"
    >
      <span class="sr-only">Less</span>
      <MinusSmIcon class="h-5 w-5" aria-hidden="true" />
    </button>
    <input
      class="
        unstyled
        border-t border-gray-300 border-l-0
        text-sm
        font-medium
        text-gray-500 text-center
        py-2
        px-1
        w-9
      "
      type="number"
      :value="value"
    />
    <button
      type="button"
      class="
        -ml-px
        relative
        inline-flex
        items-center
        px-2
        py-2
        rounded-r-md
        border border-gray-300
        bg-white
        text-sm
        font-medium
        text-gray-500
        hover:bg-gray-50
        focus:z-10
        focus:outline-none
        focus:ring-1
        focus:ring-accent
        focus:border-accent
      "
      @click="increment"
    >
      <span class="sr-only">More</span>
      <PlusIcon class="h-5 w-5" aria-hidden="true" />
    </button>
  </span>
</template>

<script>
import { PlusIcon, MinusSmIcon } from "@heroicons/vue/solid";

export default {
  components: {
    PlusIcon,
    MinusSmIcon,
  },
  data() {
    return {
      value: 1,
    };
  },
  props: {
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    onChange: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    increment() {
      if (this.value < this.max) {
        this.value++;
        this.onChange(this.value);
      }
    },
    decrement() {
      if (this.value > this.min) {
        this.value--;
        this.onChange(this.value);
      }
    },
  },
};
</script>
