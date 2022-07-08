<template>
  <Container>
    <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
      <h2 class="text-center">Frequently asked questions</h2>
      <dl class="mt-12 space-y-6 divide-y divide-gray-200">
        <Disclosure
          as="div"
          v-for="faq in faqs"
          :key="faq.question"
          class="pt-6"
          v-slot="{ open }"
        >
          <dt class="text-lg">
            <DisclosureButton
              class="
                text-left
                w-full
                flex
                justify-between
                items-start
                text-gray-400
              "
            >
              <span class="font-medium text-gray-900">
                {{ faq.question }}
              </span>
              <span class="ml-6 h-7 flex items-center">
                <ChevronDownIcon
                  :class="[
                    open ? '-rotate-180' : 'rotate-0',
                    'h-6 w-6 transform',
                  ]"
                  aria-hidden="true"
                />
              </span>
            </DisclosureButton>
          </dt>
          <DisclosurePanel as="dd" class="mt-2 pr-12">
            <p class="text-base text-gray-500">
              {{ faq.answer }}
            </p>
          </DisclosurePanel>
        </Disclosure>
      </dl>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";

const defaultFaqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",
  },
  {
    question: "What do you call someone with no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
    Container,
  },
  props: {
    faqs: {
      type: Array,
      default: () => defaultFaqs,
    },
  },
};
</script>
