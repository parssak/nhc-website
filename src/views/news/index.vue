<script setup>
  import Header from "@/components/base/Header.vue";
  import Container from "@/components/layouts/Container.vue";
  import Breadcrumbs from "@/components/layouts/Breadcrumbs.vue";
  import { newsItems } from "@/data";
  import PaginationBar from "../../components/layouts/PaginationBar.vue";
</script>

<template>
  <Header />
  <Breadcrumbs />

  <Container class="flex items-center justify-center">
    <div class="grid md:grid-cols-3 gap-2 place-content-center">
      <div v-for="(item, index) in newsItems" :key="index" class="">
        <router-link
          :to="{ name: 'news/post', params: { id: item.id } }"
          v-if="index < 3"
          class="flex flex-col justify-center space-y-4 p-3"
        >
          <img
            src="@/assets/images/news-image.png"
            alt=""
            class="object-cover"
          />
          <h3 class="text-2xl">{{ item.title }}</h3>
          <p class="font-light">{{ item.description }}</p>
          <div>
            <p class="font-semibold text-lg">{{ item.publisher }}</p>
            <p class="font-light">{{ item.date }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </Container>
  <PaginationBar />
</template>
