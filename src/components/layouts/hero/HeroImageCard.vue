<template>
  <main class="relative">
    <div class="max-w-7xl mx-auto sm:p-6">
      <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
        <div class="absolute inset-0 image-wrapper">
          <slot name="image"></slot>
          <div class="absolute inset-0 bg-accent mix-blend-multiply" />
          <div class="absolute inset-0 bg-black opacity-50" />
        </div>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1
            class="
              text-center text-4xl
              font-extrabold
              tracking-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            <slot name="title"></slot>
          </h1>
          <div
            class="
              mt-20
              max-w-sm
              mx-auto
              sm:max-w-none sm:flex sm:justify-center
            "
          >
            <div class="grid place-items-center">
              <router-link class="btn btn-xl btn-dark" :to="{ name: 'contact' }">Contact Us</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.image-wrapper img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
