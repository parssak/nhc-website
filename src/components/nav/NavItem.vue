<template>
  <div>
    <div
      v-if="dropdownItems && dropdownItems.length > 0"
      class="flex items-center -mr-2"
    >
      <Popover class="relative">
        <PopoverButton
          class="
            group
            rounded-md
            inline-flex
            items-center
            text-base
            font-medium
            capitalize
            px-2 py-3
            whitespace-nowrap
            transition
            hover:text-accent
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal,
          "
          @click.stop
        >
          <a href="#"><slot></slot></a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2 h-5 w-5 group-transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </PopoverButton>

        <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-1"
        >
          <PopoverPanel
            class="
              absolute
              right-0
              mt-3
              transform
              z-10
              px-2
              w-screen
              max-w-sm
              sm:px-0
              lg:ml-0 lg:left-1/2 lg:-translate-x-1/2
            "
          >
            <div
              class="
                rounded-lg
                shadow-lg
                ring-1 ring-black ring-opacity-5
                overflow-hidden
              "
            >
              <div class="relative grid gap-6 bg-white px-2 py-3 sm:gap-2">
                <PopoverButton>
                  <router-link
                    v-for="item in dropdownItems"
                    :key="item.label"
                    :to="{ name: item.name }"
                    class="
                      p-3
                      flex
                      items-start
                      rounded-lg
                      transition
                      hover:bg-gray-50
                    "
                  >
                    <p
                      class="
                        text-sm
                        lg:text-base
                        font-medium
                        capitalize
                        text-gray-900
                      "
                    >
                      {{ item.label }}
                    </p>
                  </router-link>
                </PopoverButton>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
    </div>
    <div v-else class="nav-item">
      <router-link :to="{ name: route.name }" class="px-2 py-3" >
        <slot> </slot>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

export default {
  name: "NavItem",
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
  },
  props: {
    path: String,
    dropdownItems: {
      type: Array,
      required: false,
    },
    route: {
      type: Object,
      required: true,
    },
  },
};
</script>
