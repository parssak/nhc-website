<template>
  <Container>
    <div class="md:flex md:items-center md:justify-between">
      <h2>
        {{ title }}
      </h2>
      <router-link
        :to="descriptionLink"
        class="hidden font-medium text-accent with-underline md:block"
        >{{ description }}<span aria-hidden="true"> &rarr;</span></router-link
      >
    </div>

    <div
      class="
        mt-6
        grid
        md:grid-cols-2
        gap-y-5 gap-x-4
        md:gap-y-10
        sm:gap-x-6
        lg:grid-cols-4 lg:gap-y-0 lg:gap-x-8
      "
    >
      <div v-for="product in products" :key="product.id" class="group relative">
        <div
          class="
            w-full
            rounded-xl
            overflow-hidden
            border-2 border-gray-200
            transition
            group-hover:opacity-75
            h-72
            lg:h-80
            grid
            place-items-center
            bg-white
            p-6
          "
        >
          <img
            class="h-36 w-full object-contain"
            :src="product.imageUrl"
            :alt="product.imageAlt"
          />
          <div class="text-center w-44">
            <h3
              class="mt-4 text-lg text-gray-700 mb-0 font-medium leading-tight"
            >
              <router-link :to="`/products/${product.id}`">
                <span class="absolute inset-0" />
                {{ product.name }}
              </router-link>
            </h3>
            <p v-if="product.color" class="mt-1 text-gray-500">
              {{ product.color }}
            </p>
            <p class="mt-1 text-lg font-medium text-accent">
              {{ product.price }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 text-sm md:hidden">
      <router-link
        :to="descriptionLink"
        class="font-medium text-accent with-underline"
        >{{ description }}<span aria-hidden="true"> &rarr;</span></router-link
      >
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
const products = [
  {
    id: 1,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 2,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 3,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 4,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
];

export default {
  components: { Container },
  props: {
    title: {
      type: String,
      default: "Trending products",
    },
    description: {
      type: String,
      default: "Shop the collection",
    },
    products: {
      type: Array,
      default: () => products,
    },
    descriptionLink: {
      type: String,
      default: "#",
    },
  },
};
</script>
