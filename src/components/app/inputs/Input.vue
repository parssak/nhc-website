<template>
  <div class="md:w-2/3">
    <label :for="label" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <div class="mt-1">
      <input
        :type="type"
        :name="label"
        :id="label"
        :min="min"
        :value="value"
        class="
          shadow-sm
          focus:ring-indigo-500 focus:border-indigo-500
          w-full
          sm:text-sm
          border-gray-300
          rounded-md
          flex
          items-center
        "
        :placeholder="placeholder"
        @change="onChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    min: {
      type: Number,
      default: null,
    },
    defaultValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      value: this.defaultValue,
    };
  },
  methods: {
    onChange(e) {
      // this.$emit("change", e.target.value);
      this.value = e.target.value;
    },
  },
};
</script>
