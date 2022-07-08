<template>
  <main class="relative">
    <div class="absolute inset-0 w-full h-full bg-red-300">
      <img
        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
        alt=""
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-accent-dark opacity-20 mix-blend-multiply"
        aria-hidden="true"
      />
    </div>
    <Container full>
      <slot>hey</slot>
    </Container>
  </main>
</template>

<script>
  import Container from "@/components/layouts/Container.vue";

export default {
  components: {
    Container,
  },
};
</script>
