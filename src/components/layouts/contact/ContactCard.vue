<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="relative bg-white shadow-xl rounded-md">
        <h2 class="sr-only">Contact us</h2>

        <div class="grid grid-cols-1 lg:grid-cols-3 rounded-md overflow-hidden">
          <!-- Contact information -->
          <div
            class="
              relative
              overflow-hidden
              py-10
              px-6
              bg-accent-dark
              sm:px-10
              xl:p-12
            "
          >
            <div
              class="absolute inset-0 pointer-events-none sm:hidden"
              aria-hidden="true"
            >
              <svg
                class="absolute inset-0 w-full h-full"
                width="343"
                height="388"
                viewBox="0 0 343 388"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                  fill="url(#linear1)"
                  fill-opacity=".1"
                />
                <defs>
                  <linearGradient
                    id="linear1"
                    x1="254.553"
                    y1="107.554"
                    x2="961.66"
                    y2="814.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              class="
                hidden
                absolute
                top-0
                right-0
                bottom-0
                w-1/2
                pointer-events-none
                sm:block
                lg:hidden
              "
              aria-hidden="true"
            >
              <svg
                class="absolute inset-0 w-full h-full"
                width="359"
                height="339"
                viewBox="0 0 359 339"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                  fill="url(#linear2)"
                  fill-opacity=".1"
                />
                <defs>
                  <linearGradient
                    id="linear2"
                    x1="192.553"
                    y1="28.553"
                    x2="899.66"
                    y2="735.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              class="
                hidden
                absolute
                top-0
                right-0
                bottom-0
                w-1/2
                pointer-events-none
                lg:block
              "
              aria-hidden="true"
            >
              <svg
                class="absolute inset-0 w-full h-full"
                width="160"
                height="678"
                viewBox="0 0 160 678"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                  fill="url(#linear3)"
                  fill-opacity=".1"
                />
                <defs>
                  <linearGradient
                    id="linear3"
                    x1="192.553"
                    y1="325.553"
                    x2="899.66"
                    y2="1032.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 class="text-xl font-medium text-white">Contact information</h2>
            <p class="mt-6 text-base text-indigo-50 max-w-3xl">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
            <dl class="mt-8 space-y-6">
              <dt><span class="sr-only">Phone number</span></dt>
              <dd class="flex text-base text-accent-lightest">
                <PhoneIcon
                  class="flex-shrink-0 w-6 h-6 text-indigo-200"
                  aria-hidden="true"
                />
                <a
                  href="tel:+1-905-526-9800"
                  class="ml-3 hover:text-accent-lightest with-underline"
                  >+1 (905)-526-9800</a
                >
              </dd>
              <dt><span class="sr-only">Email</span></dt>
              <dd class="flex text-base text-accent-lightest">
                <MailIcon
                  class="flex-shrink-0 w-6 h-6 text-indigo-200"
                  aria-hidden="true"
                />
                <a href="mailto:contact@mail.com" class="ml-3 with-underline"
                  >contact@mail.com</a
                >
              </dd>
            </dl>
          </div>

          <!-- Contact form -->
          <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
            <h2 class="text-xl font-medium text-gray-900">Send us a message</h2>
            <form
              action="#"
              method="POST"
              class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  for="first-name"
                  class="block text-sm font-medium text-gray-900"
                  >First name</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="
                      py-3
                      px-4
                      block
                      w-full
                      shadow-sm
                      text-gray-900
                      focus:ring-accent-dark
                      focus:border-accent-dark
                      focus:ring-accent-dark
                      focus:border-accent-dark
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
              </div>
              <div>
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-900"
                  >Last name</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="
                      py-3
                      px-4
                      block
                      w-full
                      shadow-sm
                      text-gray-900
                      focus:ring-accent-dark focus:border-accent-dark
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-900"
                  >Email</label
                >
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="
                      py-3
                      px-4
                      block
                      w-full
                      shadow-sm
                      text-gray-900
                      focus:ring-accent-dark focus:border-accent-dark
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
              </div>
              <div>
                <div class="flex justify-between">
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-900"
                    >Phone</label
                  >
                  <span id="phone-optional" class="text-sm text-gray-500"
                    >Optional</span
                  >
                </div>
                <div class="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autocomplete="tel"
                    class="
                      py-3
                      px-4
                      block
                      w-full
                      shadow-sm
                      text-gray-900
                      focus:ring-accent-dark focus:border-accent-dark
                      border-gray-300
                      rounded-md
                    "
                    aria-describedby="phone-optional"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="subject"
                  class="block text-sm font-medium text-gray-900"
                  >Practice Area</label
                >
                <div class="mt-1">
                  <select id="choice" name="choice" class="mt-1">
                    <option>Practice 1</option>
                    <option selected="">Practice 2</option>
                    <option>Practice 3</option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label
                    for="message"
                    class="block text-sm font-medium text-gray-900"
                    >Message</label
                  >
                  <span id="message-max" class="text-sm text-gray-500"
                    >Max. 500 characters</span
                  >
                </div>
                <div class="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="
                      py-3
                      px-4
                      block
                      w-full
                      shadow-sm
                      text-gray-900
                      focus:ring-accent-dark focus:border-accent-dark
                      border border-gray-300
                      rounded-md
                    "
                    aria-describedby="message-max"
                  />
                </div>
              </div>
              <div class="sm:col-span-2 sm:flex sm:justify-end">
                <button
                  type="submit"
                  class="
                    mt-2
                    w-full
                    inline-flex
                    items-center
                    justify-center
                    px-6
                    py-3
                    border border-transparent
                    rounded-md
                    shadow-sm
                    text-base
                    font-medium
                    text-white
                    bg-brown
                    hover:bg-brown-light
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-accent-dark
                    sm:w-auto
                  "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MailIcon, PhoneIcon } from "@heroicons/vue/outline";
export default {
  name: "Contact Section",
  components: {
    MailIcon,
    PhoneIcon,
  },
};
</script>
