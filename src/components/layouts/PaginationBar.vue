<script setup>
  import Button from "../app/Button.vue";
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 bg-accent-lightest py-8">
    <div class="max-w-full lg:max-w-7xl lg:mx-auto">
      <div class="md:px-6 space-x-3 space-y-2 flex flex-col md:flex-row  justify-between items-center">
        <p>Showing <b>1</b> to <b>3</b> of <b>20</b> results</p>

        <section class="items-center flex space-x-4">
          <Button :leadingChevron="true" class="btn-lg"> Previous </Button>
          <Button :trailingChevron="true" class="btn-lg"> Next </Button>
        </section>
      </div>
    </div>
  </div>
</template>
