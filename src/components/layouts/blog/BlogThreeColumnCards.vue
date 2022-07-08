<template>
  <Container>
    <div class="text-center mb-12" v-if="showHeading">
      <h2
        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
      >
        {{ title }}
      </h2>
      <p
        class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 font-light"
      >
        {{ description }}
      </p>
    </div>
    <div
      class="
        max-w-xl
        mx-auto
        grid
        gap-8
        lg:gap-y-9 lg:grid-cols-3 lg:max-w-none
      "
    >
      <div
        v-for="post in posts"
        :key="post.title"
        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
      >
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <p class="text-sm font-medium text-accent">
              <router-link :to="post.href" class="hover:underline">
                {{ post.category.name }}
              </router-link>
            </p>
            <router-link :to="post.href" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">
                {{ post.title }}
              </p>
              <p class="mt-3 text-base text-gray-500">
                {{ post.description }}
              </p>
            </router-link>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <router-link :to="post.href">
                <span class="sr-only">{{ post.author.name }}</span>
                <img
                  class="h-10 w-10 rounded-full"
                  :src="post.author.imageUrl"
                  alt=""
                />
              </router-link>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                <router-link :to="post.href" class="hover:underline">
                  {{ post.author.name }}
                </router-link>
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time :datetime="post.datetime">
                  {{ post.date }}
                </time>
                <span aria-hidden="true"> &middot; </span>
                <span> {{ post.readingTime }} read </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '../Container.vue';

const defaultPosts = [
  {
    title: "Boost your conversion rate",
    href: "/news/details",
    category: { name: "Article", href: "/news/details" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "/news/details",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "/news/details",
    category: { name: "Video", href: "/news/details" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "/news/details",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Improve your customer experience",
    href: "/news/details",
    category: { name: "Case Study", href: "/news/details" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "/news/details",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default {
  components: { Container },
  props: {
    posts: {
      type: Array,
      default: () => defaultPosts,
    },
    title: {
      type: String,
      default: "From the Blog",
    },
    description: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.",
    },
    showHeading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
