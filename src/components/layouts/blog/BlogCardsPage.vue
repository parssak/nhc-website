<template>
  <Container>
    <h2>{{ title }}</h2>
    <p>
      {{ description }}
    </p>
    <section v-for="post in posts" :key="post.title" class="mt-10">
      <div class="h-80 w-full bg-accent-lightest mb-3 rounded-md"></div>
      <div class="flex w-full justify-between">
        <h2 class="text-2xl mb-1">{{ post.title }}</h2>
      </div>
      <p class="mb-4">{{ post.description }}</p>
      <div class="flex w-full justify-between">
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-full overflow-hidden mr-2">
            <img :src="post.author.imageUrl" alt="" />
          </div>
          <div>
            <p class="font-medium text-sm text-black">{{ post.author.name }}</p>
            <p class="text-sm">
              {{ post.date }}<span class="mx-1">&middot;</span
              >{{ post.readingTime }}
            </p>
          </div>
        </div>
        <div>
          <router-link
            to="/blog/details"
            class="with-underline font-medium text-accent"
          >
            Read full story
          </router-link>
        </div>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
const defaultPosts = [
  {
    title: "Boost your conversion rate",
    href: "/blog/details",
    category: {
      name: "Article",
      href: "/blog/details",
      color: "bg-indigo-100 text-indigo-800",
    },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Paul York",
      href: "/blog/details",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "6 min",
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "/blog/details",
    category: {
      name: "Video",
      href: "/blog/details",
      color: "bg-pink-100 text-pink-800",
    },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    author: {
      name: "Dessie Ryan",
      href: "/blog/details",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "4 min",
  },
  {
    title: "Improve your customer experience",
    href: "/blog/details",
    category: {
      name: "Case Study",
      href: "/blog/details",
      color: "bg-green-100 text-green-800",
    },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    author: {
      name: "Easer Collins",
      href: "/blog/details",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "11 min",
  },
];
export default {
  components: { Container },
  props: {
    posts: {
      type: Array,
      default: defaultPosts,
    },
    title: {
      type: String,
      default: "Recent Publications",
    },
    description: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget nisl auctor, rhoncus nisl ut, aliquam erat.",
    },
  },
};
</script>
