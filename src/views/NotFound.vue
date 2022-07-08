<script setup>
import Container from "@/components/layouts/Container.vue";
</script>

<template>
  <Container>
    <div class="flex items-center justify-center flex-col pt-24 text-center">
      <h1>Page not found...</h1>
      <p class="mt-2">We're not quite sure what happened. <br /> [Error 404]</p>
      <router-link class="btn btn-xl mt-8" :to="{ name: 'home' }">Take me back!</router-link>
    </div>
  </Container>
</template>
