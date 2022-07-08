<template>
  <div class="bg-accent-lightest">
    <div
      class="
        max-w-7xl
        mx-auto
        py-12
        px-4
        sm:px-6
        lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between
      "
    >
      <h2
        class="
          text-3xl
          font-extrabold
          tracking-tight
          text-accent-dark
          md:text-4xl
        "
      >
        <span class="block">Ready to dive in?</span>
        <span class="block text-accent">Start your free trial today.</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <router-link class="btn btn-xl btn-dark" :to="{ name: 'contact' }">Get Started</router-link>
      </div>
    </div>
  </div>
</template>

