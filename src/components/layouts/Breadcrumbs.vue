<script setup>
  import { useRoute } from "vue-router";
  import { ROUTES_SOURCE } from "@/data/routes";

  const route = useRoute();
  const fullPath = route.fullPath;

  const paths = fullPath.split("/");
  paths.shift();

  const pathSections = paths
    .map((section, index) => {
      const matchPath = `/${paths.slice(0, index + 1).join("/")}`;

      const route = ROUTES_SOURCE.find(({ path }) => path === matchPath);

      if (route.fake) return null;
      return route;
    })
    .filter(Boolean);
  // console.log("pathSections", pathSections);

  const sections = [ROUTES_SOURCE[0], ...pathSections];
</script>
<template>
  <div class="px-4 sm:px-6 lg:px-8 bg-accent-lightest py-4">
    <div class="max-w-full lg:max-w-7xl lg:mx-auto">
      <div class="md:px-6 space-x-3">
        <router-link
          v-for="(section, index) in sections"
          :key="section.name"
          :to="{ name: section.name }"
          class="text-accent-text-grey last:text-accent-darkest last:font-semibold font-normal tracking-normal"
          >{{ section.meta.title }}
          <span v-if="index !== sections.length - 1" class="ml-2">/</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
