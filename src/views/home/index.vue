<template>
  <!-- <Header title="Lorem ipsum dolor sit amet consectetur, adipisicing elit." /> -->
  <!-- <HeroImageSplit/>  -->
  <!-- <HeroImageCard/> -->
  <HeroImageSplit>
    <template v-slot:left-content>
      <h1 class="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elitsuada viverra
        elit.
      </h1>
      <div class="mt-6 space-x-4 flex items-center">
        <Button :trailingChevron="true" class="btn-lg btn-dark">
          Learn More
        </Button>
        <Button :trailingChevron="true" class="btn-lg btn-light">
          Learn More
        </Button>
      </div>
    </template>
    <template v-slot:right-content>
      <img
        src="@/assets/images/contact.png"
        class="w-full h-full object-cover"
        alt=""
      />
    </template>
  </HeroImageSplit>

  <Container>
    <SplitCard />
  </Container>

  <Container class="bg-accent-lightest">
    <div class="grid lg:grid-cols-3 gap-4">
      <div
        v-for="section in sections"
        :key="section.title"
        class="p-8 bg-white border border-accent-dark/50 max-w-xl mx-auto"
      >
        <img
          src="@/assets/images/contact.png"
          class="object-cover h-48 w-full"
        />
        <h3 class="mb-4 mt-6">{{ section.title }}</h3>
        <p class="text-accent-darkest">{{ section.description }}</p>
        <router-link :to="{ name: section.href }" class="mt-6 block">
          <Button class="btn-lg btn-dark" :trailingChevron="true">
            Learn More
          </Button>
        </router-link>
      </div>
    </div>
  </Container>

  <Container class="bg-accent">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <h3 class="text-white text-4xl">
        Sign-up to Receive Our Statements or Communiques 
      </h3>
      <div class="space-y-2">
        <form action="" class="flex flex-grow-0 space-x-4">
          <input
            type="email"
            class="p-1"
            name=""
            id=""
            required
            placeholder="Enter your email"
          />

          <Button :trailingChevron="true" class="btn-lg btn-dark flex-shrink-0">
            SIGN UP
          </Button>
        </form>
        <span class="flex items-center space-x-2">
          <p class="text-white">
            We care about the protection of your data. Read our
          </p>
          <router-link to="/privacy-policy" class="text-white underline">
            Privacy Policy
          </router-link>
        </span>
      </div>
    </div>
  </Container>

  <Container class="">
    <h2 class="text-center">Get Involved</h2>

    <div class="space-y-12">
      <SplitCard>
        <template v-slot:right>
          <h3>Become a Council Member</h3>
          <Button :trailingChevron="true" class="btn-lg btn-dark">
            Fill Out Questionnaire
          </Button>
        </template>
      </SplitCard>
      <SplitCard :flipped="true">
        <template v-slot:right>
          <h3>Become a Council Member</h3>
          <Button :trailingChevron="true" class="btn-lg btn-dark">
            Fill Out Questionnaire
          </Button>
        </template>
      </SplitCard>
    </div>
  </Container>
</template>

<script setup>
  import Container from "@/components/layouts/Container.vue";
  import HeroImageSplit from "@/components/layouts/hero/HeroImageSplit.vue";
  import Button from "@/components/app/Button.vue";
  import SplitCard from "@/components/layouts/SplitCard.vue";

  const sections = [
    {
      title: "Priorities",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit lacinia at urna a vehicula lectus. Aliquam sagittis praesent nunc, in consequat hendrerit et cras.",
      href: "priorities",
    },
    {
      title: "Latest News",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit lacinia at urna a vehicula lectus. Aliquam sagittis praesent nunc, in consequat hendrerit et cras.",
      href: "news",
    },
    {
      title: "Publications",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit lacinia at urna a vehicula lectus. Aliquam sagittis praesent nunc, in consequat hendrerit et cras.",
      href: "publications",
    },
  ];
</script>
