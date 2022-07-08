<template>
  <Container>
    <div class="lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div>
        <h4
          class="
            text-base text-accent
            font-semibold
            tracking-wide
            uppercase
            mb-2
          "
        >
          {{ label }}
        </h4>
        <h2>{{ title }}</h2>
        <p class="mt-4 text-lg text-gray-500">
          {{ description }}
        </p>
      </div>
      <div class="mt-12 lg:mt-0 lg:col-span-2">
        <dl
          class="
            space-y-10
            sm:space-y-0
            sm:grid
            sm:grid-cols-2
            sm:grid-rows-4
            sm:grid-flow-col
            sm:gap-x-6
            sm:gap-y-10
            lg:gap-x-8
          "
        >
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <CheckIcon
                class="absolute h-6 w-6 text-green-500"
                aria-hidden="true"
              />
              <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
                {{ feature.name }}
              </p>
            </dt>
            <dd class="mt-2 ml-9 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
import { CheckIcon } from "@heroicons/vue/outline";

const defaultFeatures = [
  {
    name: "Invite team members",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "List view",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Keyboard shortcuts",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Calendars",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Notifications",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
  {
    name: "Boards",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
  {
    name: "Reporting",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
  {
    name: "Mobile app",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
];

export default {
  components: {
    CheckIcon,
    Container,
  },
  props: {
    label: {
      type: String,
      default: "Label",
    },
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet consect adipisicing elit. Quos, quas, alias, voluptates, sunt, iusto.",
    },
    features: {
      type: Array,
      default: () => defaultFeatures,
    },
  },
};
</script>
