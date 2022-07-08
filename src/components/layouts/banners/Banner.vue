<template>
  <div class="relative py-6">
    <div class="banner-img-wrapper inset-0 absolute w-full h-full">
      <slot></slot>
    </div>
    <div class="inset-0 absolute bg-accent opacity-90 mix-blend-multiply"></div>
    <div class="absolute inset-0 bg-black opacity-50" />
    <Container>
      <section class="grid place-items-center">
        <h2 class="text-center text-white max-w-lg mb-2">
          {{ title }}
        </h2>
        <p class="max-w-md text-center text-white">{{ description }}</p>
      </section>
    </Container>
  </div>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
export default {
  components: { Container },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Description",
    },
  },
};
</script>

<style>
.banner-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
