<script setup>
  import Header from "@/components/base/Header.vue";
  import Container from "@/components/layouts/Container.vue";
  import Breadcrumbs from "../../components/layouts/Breadcrumbs.vue";

  const sections = [
    {
      title: "Progressive Realization of the Right to Adequate Housing",
      description:
        "The Council will outline a vision for what the progressive realization of the right to adequate housing is within a Canadian context. They will pinpoint expectations, duties, and responsibilities of the Canadian government to meet its international obligations as recognized in the International Covenant on Economic, Social, and Cultural Rights.",
      img: "https://source.unsplash.com/random/800x600",
    },
    {
      title: "Improving the National Housing Strategy",
      description:
        "The Council will assess the effectiveness of the National Housing Strategy to date and identify opportunities for improvement to better address housing needs and homelessness in Canada. The Council will also investigate the impact of financialization of the rental housing market. ",
      img: "https://source.unsplash.com/random/800x600",
    },
    {
      title: "Urban, Rural and Northern Indigenous Housing",
      description:
        "The Council has identified Urban, Rural and Northern Indigenous housing as an urgent priority and as a critical gap in the National Housing Strategy. The Honourable Ahmed Hussen, Minister of Families, Children, and Social Development, has requested the Council investigate options for the establishment of an independent, Indigenous-controlled body to create policy and administer funding for urban, rural and northern Indigenous housing. The Council has struck an Indigenous led, Urban, Rural and Northern Indigenous Housing working group that has begun work on this request and is expected to issue a preliminary report early this summer. This report will be followed by a public engagement and a final report with recommendations. ",
      img: "https://source.unsplash.com/random/800x600",
    },
  ];
</script>

<template>
  <Header />
  <Breadcrumbs />
  <Container class="">
    <div class="text-center md:px-28">
      <p>
        The recently appointed National Housing Council met for its inaugural
        and first quarterly meetings on February 4th, 11th, and April 15th,
        2021.
        <br />
        <br />
      </p>
      <p>
        These meetings took place at a moment in time where housing needs have
        been exacerbated by the COVID-19 pandemic, and the urgency to have a
        safe place to call home is more important than ever. These unprecedented
        times have also exposed the inequalities faced by marginalized
        communities, and in particular, more and more vulnerable Canadians have
        found themselves in precarious housing situations.<br />
        <br />
      </p>
      <p>
        As a result, the Council has adopted an ambitious agenda that focuses on
        addressing three priority areas in 2021-22, with the objective of
        providing concrete and actionable recommendations to the Honourable
        Ahmed Hussen, Minister of Families, Children, and Social Development.
      </p>
    </div>
  </Container>

  <Container class="bg-accent-lightest">
    <h2 class="max-w-5xl">
      The three priority areas the Council has identified for 2021-22 include:
    </h2>
    <div class="grid lg:grid-cols-3 gap-8">
      <div v-for="section in sections" :key="section.title" class="space-y-4">
        <img
          src="@/assets/images/contact.png"
          alt="image"
          class="object-cover h-48 w-full"
        />
        <h3 class="text-xl">{{ section.title }}</h3>
        <p>{{ section.description }}</p>
      </div>
    </div>
  </Container>

  <Container>
    <div class="grid md:grid-cols-2 gap-8 py-4">
      <div>
        <img
          src="@/assets/images/contact.png"
          alt=""
          class="object-cover h-full"
        />
      </div>
      <div>
        <h2 class="capitalize">
          Embracing a human rights-based approach to housing
        </h2>
        <section class="space-y-4">
          <p>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            alias facere illo, delectus id fugit culpa ipsa saepe fuga nesciunt
            autem optio laboriosam nostrum adipisci, veritatis suscipit sit
            dolor ullam. Et deserunt nulla voluptatibus a cupiditate quo
            ducimus, voluptates vitae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            accusamus nihil maiores adipisci, unde accusantium doloribus
            molestiae, est deserunt cum perferendis, sunt delectus? Dolore,
            repellat. Veritatis quae ipsam eaque sapiente quisquam illum,
            numquam cupiditate magni accusamus dolorum ex voluptates eius rem
            ducimus delectus facilis doloremque ipsum quam eligendi praesentium
            dolore.
          </p>
        </section>
      </div>
    </div>
  </Container>
</template>
