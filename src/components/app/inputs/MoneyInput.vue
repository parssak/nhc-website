<template>
  <div class="md:w-2/3">
    <label :for="label" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <div
        class="
          absolute
          inset-y-0
          left-0
          pl-3
          flex
          items-center
          pointer-events-none
        "
      >
        <span class="text-gray-500 sm:text-sm"> $ </span>
      </div>
      <input
        type="text"
        :name="label"
        :id="label"
        class="
          focus:ring-indigo-500 focus:border-indigo-500
          block
          w-full
          pl-7
          pr-12
          sm:text-sm
          border-gray-300
          rounded-md
        "
        :placeholder="placeholder"
        @change="onChange"
      />
      <div class="absolute inset-y-0 right-0 flex items-center">
        <label for="currency" class="sr-only">Currency</label>
        <select
          id="currency"
          name="currency"
          class="
            focus:ring-indigo-500 focus:border-indigo-500
            h-full
            py-0
            pl-2
            pr-7
            border-transparent
            bg-transparent
            text-gray-500
            sm:text-sm
            rounded-md
          "
        >
          <option>CAD</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Price",
    },
    placeholder: {
      type: String,
      default: "0.00",
    },
  },
  methods: {
    onChange(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
