<script setup>
  import Container from "@/components/layouts/Container.vue";

  const { title, description } = defineProps({
    title: String,
    description: String,
  });
</script>

<template>
  <div class="bg-accent-darker">
    <Container class="grid">
      <div class="py-8">
        <h1 class="text-white capitalize">
          {{ title ?? $route.meta.title }}
        </h1>
        <p v-if="description" class="mt-6 text-xl text-indigo-100 max-w-3xl">
          {{ description }}
        </p>
      </div>
    </Container>
  </div>
  
</template>
