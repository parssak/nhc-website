<script setup>
  import Container from "./Container.vue";
  import Button from "../app/Button.vue";
  import { defineProps } from "vue";

  const { flipped } = defineProps({
    flipped: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style>
  .left-content img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>

<template>
  <div class="bg-accent-lightest grid md:grid-cols-2">
    <div :class="`${flipped && 'md:order-2'} left-content`">
      <slot name="left ">
        <img src="@/assets/images/contact1.png" alt="" class="" />
      </slot>
    </div>

    <div
      :class="`px-4 py-6 sm:p-6 md:px-14 md:py-20 ${
        flipped && 'md:order-1'
      }  flex flex-col justify-center `"
    >
      <slot name="right">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa odit
          fugiat quasi amet enim perferendis dolor quos, ullam, ratione ex
          officia pariatur praesentium, soluta totam obcaecati cumque delectus a
          iure nemo. Iure facere eligendi soluta aliquam hic ex consequatur
          nihil.
        </p>

        <Button class="btn-lg btn-dark mt-6 md:mt-12" :trailingChevron="true">
          Learn More
        </Button>
      </slot>
    </div>
  </div>
</template>
