<template>
  <div class="relative bg-gray-800">
    <div class="h-56 sm:h-72 relative md:absolute md:left-0 md:h-full md:w-1/2">
      <img
        class="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
        alt=""
      />
      <div class="absolute inset-0 bg-accent mix-blend-multiply" />
    </div>
    <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h4
          class="text-base font-semibold uppercase tracking-wider text-gray-300"
        >
          Award winning support
        </h4>
        <h2 class="mt-2 text-white mb-0">We’re here to help</h2>
        <p class="mt-3 text-lg text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
          tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
          et fermentum, augue. Aliquet amet volutpat quisque ut interdum
          tincidunt duis.
        </p>
        <div class="mt-8">
          <router-link class="btn btn-xl btn-dark" :to="{ name: 'contact' }"
            >Get in touch</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from "@heroicons/vue/solid";

export default {
  components: {
    ExternalLinkIcon,
  },
};
</script>
