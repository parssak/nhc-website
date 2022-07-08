<template>
  <Container>
    <div class="relative mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
      <div>
        <h2>{{ title }}</h2>
        <div
          class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center"
        >
          <p class="text-xl text-gray-500">
            Get weekly articles in your inbox on how to grow your business.
          </p>
          <form class="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autocomplete="email"
                required=""
                class="
                  appearance-none
                  w-full
                  px-4
                  py-2
                  border border-gray-300
                  text-base
                  rounded-md
                  text-gray-900
                  bg-white
                  placeholder-gray-500
                  lg:max-w-xs
                "
                placeholder="Enter your email"
              />
            </div>
            <div
              class="
                mt-2
                flex-shrink-0
                w-full
                flex
                rounded-md
                shadow-sm
                sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex
              "
            >
              <button
                type="button"
                class="
                  w-full
                  bg-accent
                  transition
                  px-4
                  py-2
                  border border-transparent
                  rounded-md
                  flex
                  items-center
                  justify-center
                  text-base
                  font-medium
                  text-white
                  hover:bg-accent-light hover:text-accent-dark
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-accent
                  sm:w-auto sm:inline-flex
                "
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
        <div v-for="post in posts" :key="post.title">
          <p class="text-sm text-gray-500">
            <time :datetime="post.datetime">{{ post.date }}</time>
          </p>
          <a href="#" class="mt-2 block">
            <p class="text-xl font-semibold text-gray-900">
              {{ post.title }}
            </p>
            <p class="mt-3 text-base text-gray-500">
              {{ post.description }}
            </p>
          </a>
          <div class="mt-3">
            <router-link
              :to="post.href"
              class="
                text-base
                font-semibold
                text-accent
                transition
                with-underline
              "
            >
              Read full story
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container";
const defaultPosts = [
  {
    title: "Boost your conversion rate",
    href: "/news/details",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "/news/details",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
  },
  {
    title: "Improve your customer experience",
    href: "/news/details",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
  },
  {
    title: "Writing effective landing page copy",
    href: "/news/details",
    description:
      "Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.",
    date: "Jan 29, 2020",
    datetime: "2020-01-29",
  },
];
export default {
  components: {
    Container,
  },
  props: {
    posts: {
      type: Array,
      default: () => defaultPosts,
    },
    title: {
      type: String,
      default: "Press",
    },
    description: {
      type: String,
      default:
        "Get weekly articles in your inbox on how to grow your business.",
    },
  },
};
</script>
