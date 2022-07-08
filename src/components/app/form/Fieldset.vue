<template>
  <hr :class="`relative ${withoutHr && 'hidden'}`" />
  <div :class="!title && !description && '-mt-6'">
    <h3
      v-if="title.length > 0"
      class="text-lg leading-6 font-medium text-gray-900"
    >
      {{ title }}
    </h3>
    <p v-if="description" class="max-w-xl mt-2 text-sm text-gray-500">
      {{ description }}
    </p>
    <fieldset class="space-y-6">
      <legend class="sr-only">{{ title }}</legend>
      <slot></slot>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "Fieldset",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    withoutHr: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
