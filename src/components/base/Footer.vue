<template>
  <footer class="bg-accent-darker text-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
        <div class="lg:col-span-2">
          <h3 class="mb-4 text-lg font-semibold tracking-wider text-white">
            Disclaimer
          </h3>
          <p class="text-white font-light">
            The views or opinions expressed on, or through, this webpage are
            solely those of the National Housing Council, and do not necessarily
            represent or reflect the official policy or position of the
            Government of Canada and/or Canada Mortgage and Housing Corporation
            (CMHC). The National Housing Council does not act or speak on behalf
            of the Government of Canada or CMHC.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="mb-4 text-lg font-semibold tracking-wider text-white">
            Navigation
          </h3>
          <div class="space-y-3 footer-nav-items flex flex-col items-start">
            <router-link
              v-for="route in routes"
              :key="route.label"
              class="transition uppercase font-normal"
              :to="route.path"
              >{{ route.label }}</router-link
            >
          </div>
        </div>
        <div>
          <h3 class="mb-4 text-lg font-semibold tracking-wider text-white">
            Social
          </h3>
          <div class="flex space-x-5">
            <a href="#"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 14.991 3.657 19.128 8.438 19.878V12.891H5.898V10H8.438V7.797C8.438 5.291 9.93 3.907 12.215 3.907C13.309 3.907 14.453 4.102 14.453 4.102V6.562H13.193C11.95 6.562 11.563 7.333 11.563 8.124V10H14.336L13.893 12.89H11.563V19.878C16.343 19.128 20 14.991 20 10Z"
                  fill="currentColor"
                  class="hover:fill-accent-light transition"
                />
              </svg>
            </a>
            <a href="#"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.315 0C12.745 0 13.099 0.0129999 14.123 0.0599999C15.187 0.109 15.914 0.278 16.55 0.525C17.2175 0.775874 17.8222 1.16936 18.322 1.678C18.8306 2.17777 19.2241 2.7825 19.475 3.45C19.722 4.086 19.891 4.813 19.94 5.877C19.988 6.944 20 7.284 20 10V10.08C20 12.723 19.988 13.067 19.94 14.123C19.891 15.187 19.722 15.914 19.475 16.55C19.2241 17.2175 18.8306 17.8222 18.322 18.322C17.8222 18.8306 17.2175 19.2241 16.55 19.475C15.914 19.722 15.187 19.891 14.123 19.94C13.056 19.988 12.716 20 10 20H9.92C7.277 20 6.933 19.988 5.877 19.94C4.813 19.891 4.086 19.722 3.45 19.475C2.7825 19.2241 2.17777 18.8306 1.678 18.322C1.16936 17.8222 0.775874 17.2175 0.525 16.55C0.278 15.914 0.109 15.187 0.0599999 14.123C0.0129999 13.099 0 12.744 0 10.315V9.685C0 7.255 0.0129999 6.901 0.0599999 5.877C0.109 4.813 0.278 4.086 0.525 3.45C0.775874 2.7825 1.16936 2.17777 1.678 1.678C2.17777 1.16936 2.7825 0.775874 3.45 0.525C4.086 0.278 4.813 0.109 5.877 0.0599999C6.901 0.0129999 7.256 0 9.685 0H10.315ZM10.234 1.802H9.766C7.31 1.802 6.982 1.813 5.959 1.86C4.984 1.905 4.455 2.067 4.102 2.204C3.635 2.386 3.302 2.602 2.952 2.952C2.602 3.302 2.386 3.635 2.204 4.102C2.067 4.455 1.904 4.984 1.86 5.959C1.813 6.982 1.802 7.31 1.802 9.766V10.234C1.802 12.69 1.813 13.018 1.86 14.041C1.905 15.016 2.067 15.545 2.204 15.898C2.386 16.364 2.603 16.698 2.952 17.048C3.302 17.398 3.635 17.614 4.102 17.796C4.455 17.933 4.984 18.096 5.959 18.14C7.013 18.188 7.329 18.198 10 18.198H10.08C12.677 18.198 12.997 18.188 14.04 18.14C15.016 18.095 15.545 17.933 15.898 17.796C16.364 17.614 16.698 17.398 17.048 17.048C17.398 16.698 17.614 16.365 17.796 15.898C17.933 15.545 18.096 15.016 18.14 14.041C18.188 12.986 18.198 12.671 18.198 10V9.92C18.198 7.323 18.188 7.003 18.14 5.96C18.095 4.984 17.933 4.455 17.796 4.102C17.6358 3.66757 17.3802 3.2746 17.048 2.952C16.7254 2.61986 16.3324 2.36426 15.898 2.204C15.545 2.067 15.016 1.904 14.041 1.86C13.018 1.813 12.69 1.802 10.234 1.802ZM10 4.865C10.6743 4.865 11.3421 4.99782 11.9651 5.25588C12.5881 5.51394 13.1542 5.89218 13.631 6.36901C14.1078 6.84584 14.4861 7.41191 14.7441 8.03492C15.0022 8.65793 15.135 9.32566 15.135 10C15.135 10.6743 15.0022 11.3421 14.7441 11.9651C14.4861 12.5881 14.1078 13.1542 13.631 13.631C13.1542 14.1078 12.5881 14.4861 11.9651 14.7441C11.3421 15.0022 10.6743 15.135 10 15.135C8.63811 15.135 7.33201 14.594 6.36901 13.631C5.40601 12.668 4.865 11.3619 4.865 10C4.865 8.63811 5.40601 7.33201 6.36901 6.36901C7.33201 5.40601 8.63811 4.865 10 4.865ZM10 6.667C9.11603 6.667 8.26827 7.01815 7.64321 7.64321C7.01815 8.26827 6.667 9.11603 6.667 10C6.667 10.884 7.01815 11.7317 7.64321 12.3568C8.26827 12.9818 9.11603 13.333 10 13.333C10.884 13.333 11.7317 12.9818 12.3568 12.3568C12.9818 11.7317 13.333 10.884 13.333 10C13.333 9.11603 12.9818 8.26827 12.3568 7.64321C11.7317 7.01815 10.884 6.667 10 6.667ZM15.338 3.462C15.6563 3.462 15.9615 3.58843 16.1865 3.81347C16.4116 4.03852 16.538 4.34374 16.538 4.662C16.538 4.98026 16.4116 5.28548 16.1865 5.51053C15.9615 5.73557 15.6563 5.862 15.338 5.862C15.0197 5.862 14.7145 5.73557 14.4895 5.51053C14.2644 5.28548 14.138 4.98026 14.138 4.662C14.138 4.34374 14.2644 4.03852 14.4895 3.81347C14.7145 3.58843 15.0197 3.462 15.338 3.462Z"
                  fill="currentColor"
                  class="hover:fill-accent-light transition"
                />
              </svg>
            </a>
            <a href="#" class="cursor-pointer">
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.29 16.2534C13.837 16.2534 17.965 10.0004 17.965 4.5784C17.965 4.4004 17.965 4.2234 17.953 4.0484C18.7562 3.46693 19.4493 2.74701 20 1.9224C19.2511 2.2544 18.4566 2.47216 17.643 2.5684C18.4996 2.05546 19.1408 1.24875 19.447 0.298398C18.6417 0.776285 17.7607 1.11313 16.842 1.2944C16.2234 0.636163 15.405 0.200233 14.5136 0.0541031C13.6222 -0.0920265 12.7075 0.0597974 11.9111 0.486067C11.1147 0.912337 10.4811 1.58927 10.1083 2.41206C9.7355 3.23485 9.64437 4.15758 9.849 5.0374C8.21759 4.95564 6.6216 4.53172 5.16465 3.79317C3.70769 3.05461 2.42233 2.01792 1.392 0.750398C0.867318 1.6536 0.706589 2.72282 0.942536 3.74036C1.17848 4.75791 1.79337 5.64728 2.662 6.2274C2.00926 6.2085 1.37063 6.0329 0.8 5.7154V5.7674C0.800389 6.71469 1.1284 7.6327 1.7284 8.36576C2.3284 9.09881 3.16347 9.60179 4.092 9.7894C3.48781 9.95411 2.85389 9.97806 2.239 9.8594C2.50116 10.6749 3.01168 11.388 3.69913 11.899C4.38658 12.41 5.21657 12.6934 6.073 12.7094C5.22212 13.378 4.24779 13.8722 3.20573 14.1639C2.16367 14.4556 1.07432 14.539 0 14.4094C1.8766 15.6137 4.06019 16.2525 6.29 16.2494"
                  fill="currentColor"
                  class="hover:fill-accent-light transition"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.338 15.338H12.67V11.16C12.67 10.165 12.653 8.883 11.283 8.883C9.893 8.883 9.682 9.969 9.682 11.09V15.338H7.014V6.748H9.573V7.922H9.61C9.966 7.247 10.837 6.535 12.136 6.535C14.839 6.535 15.339 8.313 15.339 10.627V15.338H15.338ZM4.005 5.575C3.80171 5.5752 3.60038 5.53535 3.41249 5.45774C3.2246 5.38013 3.05384 5.26627 2.90996 5.12266C2.76607 4.97906 2.65188 4.80852 2.57391 4.62078C2.49593 4.43304 2.4557 4.23179 2.4555 4.0285C2.4553 3.82521 2.49515 3.62388 2.57276 3.43599C2.65037 3.2481 2.76423 3.07734 2.90784 2.93346C3.05144 2.78957 3.22198 2.67538 3.40972 2.59741C3.59746 2.51943 3.79871 2.4792 4.002 2.479C4.41255 2.4786 4.80645 2.64131 5.09704 2.93134C5.38763 3.22136 5.5511 3.61494 5.5515 4.0255C5.5519 4.43606 5.38919 4.82995 5.09916 5.12054C4.80914 5.41113 4.41556 5.5746 4.005 5.575ZM2.668 15.338H5.34V6.748H2.667V15.338H2.668ZM16.668 0H1.328C0.595 0 0 0.581 0 1.298V16.701C0 17.418 0.595 18 1.328 18H16.668C17.402 18 18 17.418 18 16.701V1.298C18 0.581 17.402 0 16.668 0Z"
                  fill="currentColor"
                  class="hover:fill-accent-light transition"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Sign Up Section  -->
        <div class="space-y-3 lg:col-span-2">
          <h3 class="mb-4 text-lg font-semibold tracking-wider text-white">
            Sign-up to Receive Our Statements or Communiques 
          </h3>

          <p class="mb-3 text-sm tracking-wider text-white">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form action="">
            <input
              type="email"
              class="p-1 mb-3"
              name=""
              id=""
              required
              placeholder="Enter your email"
            />

            <Button :trailingChevron="true" class="btn-lg"> SIGN UP </Button>
          </form>
        </div>
      </div>
      <div
        class="mt-8 pt-8 border-gray-200 md:flex md:items-center md:justify-between"
      >
        <p class="text-base text-gray-300">
          National Housing Council &copy; 2022 | All rights reserved.
        </p>
        <div class="flex justify-between items-center footer-nav-items">
          <a href="#" class="text-sm text-gray-300 uppercase"
            >privacy policy
          </a>
          <span class="text-sm text-gray-300 font-bold md:mx-4">|</span>
          <a href="#" class="text-sm text-gray-300 uppercase"
            >terms & Conditions</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import { ROUTES_SOURCE } from "@/data/routes.js";
  import Button from "../app/Button.vue";

  const routesBeDisplayed = [
    "home",
    "overview",
    "Terms Of Reference",
    "National Housing Council Charter",
    "Priorities",
    "Members",
    "Review Panel",
    "News",
    "Publications",
    "Contact",
  ].map((item) => item.toLowerCase());

  const routeSource = ROUTES_SOURCE;
  const routes = routeSource.filter((route) => {
    return routesBeDisplayed.includes(route.label.toLowerCase());
  });
  console.log("routes", routes);

  export default {
    setup() {
      return {
        routes: routes,
      };
    },
    components: {
      Button,
    },
  };
</script>
