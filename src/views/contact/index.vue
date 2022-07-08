<script setup>
  import Header from "@/components/base/Header.vue";
  import Container from "@/components/layouts/Container.vue";
  import Breadcrumbs from "@/components/layouts/Breadcrumbs.vue";
  import Button from "@/components/app/Button.vue";
  import SplitCard from "@/components/layouts/SplitCard.vue";
</script>

<template>
  <Header />
  <Breadcrumbs />
  <Container>
    <div class="grid md:grid-cols-2 gap-x-12 py-4 space-y-2">
      <img
        src="@/assets/images/member-image.png"
        alt=""
        class="object-cover h-full w-full"
      />

      <div class="space-y-6">
        <h2>Get In Touch</h2>
        <p>
          Send us a message using the form below. For general inquiries call
          <span class="font-semibold text-accent">1-800-555-5555</span> or email
          <span class="font-semibold text-accent">info@nhc.ca.</span>
        </p>
        <form action="" class="grid md:grid-cols-2 gap-y-2 gap-x-8">
          <label for="firstName" class="col-span-1 col-start-1"
            >First Name</label
          >
          <label for="lastName" class="col-span-1 col-start-2">Last Name</label>
          <input type="text" class="col-start-1" />
          <input type="text" class="col-start-2" />
          <label for="email" class="col-span-2 col-start-1">Email</label>
          <input type="email" class="col-span-2 col-start-1" />
          <label for="company" class="col-span-2 col-start-1">Company</label>
          <input type="text" class="col-span-2 col-start-1" />
          <label for="phone" class="col-span-1">Phone</label>
          <label
            for="phone"
            class="col-span-1 col-start-2 flex justify-end text-accent-text-grey"
          >
            <span> Optional </span></label
          >
          <input type="tel" class="col-span-2 col-start-1" />

          <label for="message" class="col-span-1">Your Message</label>
          <label
            for="message"
            class="col-span-1 col-start-2 flex justify-end text-accent-text-grey"
            ><span>Max. 500 Characters</span></label
          >
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            class="col-span-2 max-h-48"
            maxlength="500"
          ></textarea>
        </form>
        <Button :trailingChevron="true" class="btn-lg">Send Message</Button>
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
          <h3>Provide Expert And Lived Experience Advice</h3>
          <Button :trailingChevron="true" class="btn-lg btn-dark">
            Fill Out Questionnaire
          </Button>
        </template>
      </SplitCard>
    </div>
  </Container>
</template>
