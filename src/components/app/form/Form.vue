<template>
  <form action="#" method="POST">
    <div class="shadow rounded-md overflow-hidden">
      <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            {{ title }}
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            {{ description }}
          </p>
        </div>

        <div class="grid gap-6">
          <slot></slot>
        </div>
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          type="submit"
          class="
            bg-indigo-600
            border border-transparent
            rounded-md
            shadow-sm
            py-2
            px-4
            inline-flex
            justify-center
            text-sm
            font-medium
            text-white
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Profile",
    },
    description: {
      type: String,
      default:
        "This information will be displayed publicly so be careful what you share.",
    },
  },
};
</script>
