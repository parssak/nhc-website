<script setup>
  import Header from "@/components/base/Header.vue";
  import Container from "@/components/layouts/Container.vue";
  import Breadcrumbs from "@/components/layouts/Breadcrumbs.vue";
  import ArrowList from "@/components/layouts/ArrowList.vue";
  import Button from "../../../components/app/Button.vue";
  const items = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Curabitur eget nisl auctor",
  ];
</script>

<template>
  <!-- <Breadcrumbs /> -->
  <Container>
    <div class="max-w-full lg:max-w-3xl lg:mx-auto space-y-8">
      <img
        src="@/assets/images/news-image.png"
        alt="news image"
        class="object-cover w-full"
      />
      <p class="text-accent-text-grey">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
      </p>
      <h1>News Headline Title</h1>
      <div class="space-x-2">
        <span>First Last </span> <span class="font-light"> April 12, 2022</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
        nisl auctor, rhoncus nisl ut, aliquam erat.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Curabitur eget nisl auctor, rhoncus nisl
        ut, Aliquam erat
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nihil at
        tempora aliquid voluptatum temporibus blanditiis hic mollitia iusto
        totam voluptatem corporis qui accusamus facere nisi, exercitationem
        ullam eum aperiam autem libero vel repudiandae vero consequuntur!
        Consectetur error nihil ex, nesciunt beatae provident delectus impedit
        obcaecati ratione repellat, modi culpa magnam eos possimus
        <span class="underline text-accent font-bold">Aliquam erat</span>
        obcaecati ratione repellat.
      </p>
      <ArrowList :items="items" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio
        possimus voluptas nostrum cum architecto aspernatur ducimus dignissimos
        ad iure! Quaerat perspiciatis aliquid unde doloribus quasi reprehenderit
        laboriosam similique maxime, modi, magni ab cum perferendis harum
        ratione adipisci ullam sit id nostrum a placeat odio. Possimus totam id
      </p>
      <h2>Headline 2</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
        nisl auctor, rhoncus nisl ut, aliquam erat.perferendis alias tempora
        voluptas assumenda porro cum iste maxime reiciendis atque, velit
        officiis accusantium ducimus quisquam, commodi animi deserunt, expedita
        reprehenderit? Quos sed error maxime!
      </p>
      <div class="py-0.5 px-5 border-l-4 border-l-accent">
        <p class="italic font-semibold">
          "Lorem ipsum dolorsit amet, consectetur adipiscing elit. Curabitur
          eget nisl auctor, rhoncus nisl ut, aliquam erat.commodi animi
          deserunt, expedita reprehenderit? Quos sed error maxime!"
        </p>
      </div>
      <h3>Headline 3</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur
        <span class="text-accent font-bold">adipisicing</span>. Doloremque
        asperiores facilis in expedita, numquam doloribus molestiae. Nihil
        recusandae deleniti atque eius mollitia sequi ex laudantium odio vel
        porro enim, harum omnis qui est architecto non tempora veritatis et
        minus aut ab eveniet? Natus laudantium voluptatum deserunt eveniet,
        dolorum, delectus ducimus fugit quas eius exercitationem totam tenetur?
        Quaerat sequi laborum cumque.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis
        saepe molestias asperiores sed velit, vitae illum laborum? Totam, dolor
        vero. Laborum harum mollitia reprehenderit vitae nemo. Harum, sequi, id
        consequuntur aut reprehenderit impedit eligendi porro repellat
        perferendis sint sunt!
      </p>

      <section class="flex items-center space-x-4 justify-between">
        <Button :leadingChevron="true" class="btn-lg"> Previous </Button>
        <Button :trailingChevron="true" class="btn-lg"> Next </Button>
      </section>
    </div>
  </Container>
</template>
