<template>
  <Container>
    <h2>{{ title }}</h2>
    <div
      class="
        space-y-12
        sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8
        lg:gap-x-8 lg:space-y-0
      "
    >
      <div v-for="person in people" :key="person.name" class="sm:py-8">
        <div
          class="
            space-y-4
            sm:grid sm:grid-cols-4 sm:items-start sm:gap-6 sm:space-y-0
          "
        >
          <div class="aspect-w-3 aspect-h-2 sm:aspect-w-2 sm:aspect-h-2">
            <img
              class="object-cover shadow-lg rounded-lg"
              :src="person.imageUrl"
              alt=""
            />
          </div>
          <div class="sm:col-span-3 lg:col-span-2 flex flex-col h-full">
            <div class="space-y-4">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h2 class="text-xl md:text-3xl mb-0">{{ person.name }}</h2>
                <p class="text-accent">{{ person.role }}</p>
              </div>
              <div class="text-lg">
                <p class="text-gray-500">{{ person.bio }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
const defaultPeople = [
  {
    name: "Person Name",
    role: "Role",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "lorem ipsum dolor sit amet, con",
  },
];
export default {
  components: { Container },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    people: {
      type: Array,
      default: () => defaultPeople,
    },
  },
};
</script>
