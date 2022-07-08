<script setup>
  import Header from "@/components/base/Header.vue";
  import Container from "@/components/layouts/Container.vue";
  import Breadcrumbs from "@/components/layouts/Breadcrumbs.vue";
  import PaginationBar from "@/components/layouts/PaginationBar.vue";
  import Button from "@/components/app/Button.vue";
  import { publicationItems } from "@/data";
</script>

<template>
  <Header />
  <Breadcrumbs />

  <Container>
    <div class="max-w-full lg:max-w-5xl lg:mx-auto space-y-8">
      <section class="flex max-w-xs">
        <label
          for="Category"
          class="shrink-0 py-3 px-5 bg-accent-lightest font-medium"
          >Select Category</label
        >
        <select
          class="uppercase bg-accent-light text-accent-darkest border-0 appearance-none block w-full px-3 py-1.5 text-sm font-semibold bg-clip-padding bg-no-repeat transition ease-in-out m-0 text-center items-center tracking-wider"
          id="Category"
        >
          <option value="">Reports</option>
          <option value="1">Category 1</option>
          <option value="2">Category 2</option>
          <option value="3">Category 3</option>
        </select>
      </section>
      <section class="flex space-x-8">
        <Button class="btn-md">All</Button>
        <Button class="btn-md btn-transparent">Research</Button>
        <Button class="btn-md btn-transparent">What We Heard</Button>
        <Button class="btn-md btn-transparent"
          >Council's Recommendations to the minister</Button
        >
      </section>
      <section class="space-y-14">
        <div
          v-for="(item, index) in publicationItems"
          :key="index"
          class="space-y-4"
        >
          <router-link
            :to="{ name: 'publications/post', params: { id: item.id } }"
            v-if="index < 3"
            class="capitalize"
          >
            <h2 class="underline text-accent">{{ item.title }}</h2>
            <div class="space-x-4">
              <span class="text-base"> {{ item.publisher }}</span
              ><span class="font-light text-base">{{ item.date }}</span>
            </div>
          </router-link>
        </div>
      </section>
    </div>
  </Container>
  <PaginationBar />
</template>
