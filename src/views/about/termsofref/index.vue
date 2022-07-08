<script setup>
  import Header from "@/components/base/Header.vue";
  import Container from "@/components/layouts/Container.vue";
  import Breadcrumbs from "../../../components/layouts/Breadcrumbs.vue";
  import ArrowList from "@/components/layouts/ArrowList.vue";

  const items = [
    "Lorem ipsum dolor sit amet",
    "Aliquam sagittis praesent nunc, in consequat hendrerit et cras",
    "Suscipit lacinia at urna a vehicula lectus Suscipit lacinia at urna a vehicula lectus Suscipit lacinia at urna a vehicula lectus Suscipit lacinia at urna a vehicula lectus Suscipit lacinia at urna a vehicula lectus Suscipit lacinia at urna a vehicula lectus",
  ];
</script>

<template>
  <Header />
  <Breadcrumbs />
  <Container>
    <div class="grid md:grid-cols-2 gap-8 py-4">
      <div>
        <h2>Background</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sunt
          quisquam, voluptas illum obcaecati, nam corrupti adipisci aliquid
          dicta tenetur porro exercitationem ratione modi facere consequuntur
          dolor voluptatem repellat, alias suscipit tempore expedita nihil
          architecto. Dolores dolorem ab suscipit alias, dignissimos incidunt
          similique eaque veniam itaque omnis, soluta, in ut.<br /><br />Blanditiis
          ea, cupiditate modi quibusdam nostrum nesciunt sequi ipsa accusamus
          molestiae perspiciatis qui fugiat! Dolorum sapiente, soluta provident
          ipsam voluptates et, incidunt ut consectetur nostrum aperiam
          dignissimos, libero possimus tempore cumque deleniti labore? Delectus
          necessitatibus dolorem vitae facilis nisi repudiandae nam sunt,
          molestias ducimus. Vel voluptatem atque earum tenetur modi.<br /><br />
        </p>
        <ArrowList :items="items" />
      </div>
      <div>
        <img
          src="@/assets/images/contact.png"
          alt=""
          class="object-cover h-full"
        />
      </div>
    </div>
  </Container>
  <Container class="bg-accent-lightest">
    <h2>Mandate</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
      possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?
      <br /><br />
    </p>
    <ArrowList :items="items" />
    <p><br />Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </Container>
  <Container class="">
    <h2>Membership</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      dignissimos sapiente id a?
      <br /><br />
    </p>
    <ArrowList :items="items" />
    <p><br />Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /><br /></p>
    <ArrowList :items="items" />
    <p>
      <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
      ullam deleniti repellat minus consequuntur earum repudiandae dolores
      officiis facilis ipsa.Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Officia ullam deleniti repellat minus consequuntur earum repudiandae
      dolores officiis facilis ipsa. <br />
      <br />
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /></p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /></p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /></p>
  </Container>
  <Container class="bg-accent-lightest">
    <h2>Remuneration and Other Expenses</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
      possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?
      <br /><br />
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
      possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?
      <br />
    </p>
  </Container>
  <Container class="">
    <h2>Federal Public Administration</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
      possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?
      <br />
    </p>
  </Container>
  <Container class="bg-accent-lightest">
    <h2>Role of Co-Chairpersons</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      dignissimos sapiente id a?
      <br /><br />
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
      possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?
      <br />
      <br />
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
      possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?
      <br />
      <br />
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
      possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?
      <br />
    </p>
  </Container>
  <Container class="">
    <h2>Meetings</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
      possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?
      <br />
      <br />
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
      possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?
      <br />
      <br />
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
      possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?
      <br />
      <br />
    </p>
  </Container>
  <Container class="bg-accent-lightest">
    <div class="grid md:grid-cols-3 gap-14 py-4">
      <div class="col-span-1">
        <h2>Review Panel</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
          possimus, quos et officia ex tempore modi doloribus, quasi, vel
          ratione?
        </p>
      </div>
      <div class="col-span-2 space-y-6">
        <h3>Summary of information</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
          possimus, quos et officia ex tempore modi doloribus, quasi, vel
          ratione?
          <br />
        </p>
        <h3>Membership</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
          possimus, quos et officia ex tempore modi doloribus, quasi, vel
          ratione?
          <br />
        </p>
        <h3>Things To Consider</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          dignissimos sapiente id a? Rerum obcaecati exercitationem odit
          <br />
        </p>
        <ArrowList :items="items" />
        <h3>Duties</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
        </p>
        <ArrowList :items="items" />
        <h3>Observations of the Federal Advocate</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in
          debitis quo neque culpa consectetur libero, blanditiis qui excepturi
          dolores possimus similique numquam error amet aliquid accusantium
          mollitia adipisci asperiores officia doloremque illum explicabo
          necessitatibus distinctio. Cumque fuga magni autem cum vero, minus
          corporis facere architecto dolorum nobis. Qui atque adipisci porro
          alias velit deserunt, maxime ab eaque. Tempora quos explicabo

          <br />
        </p>
      </div>
    </div>
  </Container>
  <Container class="">
    <h2>Administrative Support</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
      possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?
      <br />
      <br />
    </p>
    <ArrowList :items="items" />
  </Container>
  <Container class="bg-accent-lightest">
    <h2>Membership Agreement, Confidentiality and Conflict of Interest</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
      possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?
    </p>
  </Container>
  <Container class="">
    <h2>Changes to Terms of Reference</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas
      possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?
    </p>
  </Container>
</template>
