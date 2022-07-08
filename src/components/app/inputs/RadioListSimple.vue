<template>
  <div>
    <label class="text-base font-medium text-gray-900">{{ title }}</label>
    <p class="text-sm leading-5 text-gray-500">
      {{ description }}
    </p>
    <fieldset class="mt-4">
      <legend class="sr-only">{{ legend }}</legend>
      <div
        :class="
          horizontal
            ? 'md:flex items-center md:space-x-8 space-y-4 md:space-y-0'
            : 'space-y-4'
        "
      >
        <div v-for="item in items" :key="item.id">
          <label class="flex items-center">
            <input
              :id="item.id"
              :name="itemsName"
              type="radio"
              :checked="item.id === 'email'"
              class="
                focus:ring-indigo-500
                h-4
                w-4
                text-indigo-600
                border-gray-300
              "
            />
            <span class="ml-3 block text-sm font-medium text-gray-700">
              {{ item.label }}
            </span>
          </label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
const defaultItems = [
  { id: "email", label: "Email" },
  { id: "sms", label: "Phone (SMS)" },
  { id: "push", label: "Push notification" },
];

export default {
  props: {
    title: {
      type: String,
      default: "Notifications",
    },
    description: {
      type: String,
      default: " ",
    },
    items: {
      type: Array,
      default: () => defaultItems,
    },
    itemsName: {
      type: String,
    },
    legend: {
      type: String,
      default: "Notification Method",
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
