<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Container>
    <div class="lg:text-center">
      <h4
        class="text-base text-accent font-semibold tracking-wide uppercase mb-2"
      >
        {{ label }}
      </h4>
      <h2>{{ title }}</h2>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        {{ description }}
      </p>
    </div>

    <div class="mt-10">
      <dl
        class="
          space-y-10
          md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10
        "
      >
        <div v-for="feature in features" :key="feature.name" class="relative">
          <dt>
            <div
              class="
                absolute
                flex
                items-center
                justify-center
                h-12
                w-12
                rounded-md
                bg-accent
                text-white
              "
            >
              <component
                :is="feature.icon"
                class="h-6 w-6"
                aria-hidden="true"
              />
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
              {{ feature.name }}
            </p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/vue/outline";

const defaultFeatures = [
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    name: "Transfers are instant",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
  {
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
  },
];

export default {
  components: { Container },
  props: {
    label: {
      type: String,
      default: "Transactions",
    },
    title: {
      type: String,
      default: "A better way to send money",
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
