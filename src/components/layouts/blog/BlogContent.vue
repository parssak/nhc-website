<template>
  <Container>
    <div class="h-80 w-full bg-accent-lightest rounded-md mb-5"></div>
    <h2 class="mb-3">{{ post.title }}</h2>
    <div class="flex items-center mb-6">
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
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut
      molestias ipsa nesciunt dicta voluptate, vel explicabo velit quibusdam
      fugiat, consequuntur quos nam porro non, molestiae dolor perspiciatis! Ab
      hic mollitia, perferendis quas officia possimus beatae? Corrupti quaerat
      dolore vitae obcaecati inventore dolores quo sequi facere quasi cum quas,
      excepturi tenetur laboriosam dolorem cupiditate reprehenderit laborum,
      nostrum explicabo molestias nesciunt! Quam, accusamus. Ad itaque corrupti
      et. Neque vel molestias recusandae totam, quia, repudiandae iure sint enim
      perferendis officiis quaerat reiciendis id reprehenderit voluptatem.
      Fugiat enim id culpa impedit consequatur voluptate iste amet! Commodi
      facilis tempora laudantium molestias voluptates labore in!
      <br /><br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut
      molestias ipsa nesciunt dicta voluptate, vel explicabo velit quibusdam
      fugiat, consequuntur quos nam porro non, molestiae dolor perspiciatis! Ab
      hic mollitia, perferendis quas officia possimus beatae? Corrupti quaerat
      dolore vitae obcaecati inventore dolores quo sequi facere quasi cum quas,
      excepturi tenetur laboriosam dolorem cupiditate reprehenderit laborum,
      nostrum explicabo molestias nesciunt! Quam, accusamus. Ad itaque corrupti
      et. Neque vel molestias recusandae totam, quia, repudiandae iure sint enim
      perferendis officiis quaerat reiciendis id reprehenderit voluptatem.
      Fugiat enim id culpa impedit consequatur voluptate iste amet! Commodi
      facilis tempora laudantium molestias voluptates labore in!
    </p>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
const defaultPost = {
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
};
export default {
  components: { Container },
  props: {
    post: {
      type: Object,
      default: defaultPost,
    },
  },
};
</script>
