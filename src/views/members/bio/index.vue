<script setup>
  import Header from "@/components/base/Header.vue";
  import Container from "@/components/layouts/Container.vue";
  import Breadcrumbs from "@/components/layouts/Breadcrumbs.vue";
  import { useRoute } from "vue-router";
  import { members } from "@/data";
  const route = useRoute();
  // get the id from routes and get the user data with that id
  console.log(route.params);
  console.log(members);
  const user = members.find((member) => member.id == route.params.id);
  console.log("user, ", user);
</script>

<template>
  <!-- <Breadcrumbs /> -->
  <Container class="flex items-center">
    <div class="grid md:grid-cols-2 gap-12 py-4">
      <div class="">
        <img
          src="@/assets/images/member-image.png"
          alt=""
          class="h-[50vh] object-cover"
        />
      </div>
      <div class="flex flex-col justify-center">
        <h2 class="capitalize font-semibold">
          {{ user.title }}
        </h2>

        <section class="space-y-4">
          <p class="text-lg text-accent-text-grey">
            {{ user.role }}
          </p>
          <p class="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            sunt quisquam, voluptas illum obcaecati, nam corrupti adipisci
            aliquid dicta tenetur porro exercitationem ratione modi facere
            consequuntur dolor voluptatem repellat, alias suscipit tempore
            expedita nihil architecto. Dolores dolorem ab suscipit alias,
            dignissimos incidunt similique eaque veniam itaque omnis, soluta, in
            ut.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos unde quidem asperiores incidunt, eum deserunt voluptatem
            sed nulla voluptatum, delectus eius eligendi doloremque magni dicta,
            provident expedita error officiis non!
          </p>

          <div class="flex space-x-5">
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
                  class="fill-accent hover:fill-accent-light transition"
                />
              </svg> </a
            ><a href="#">
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
                  class="fill-accent hover:fill-accent-light transition"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  </Container>
</template>
