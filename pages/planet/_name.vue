<template>
  <div>
    <PlanetHeader />
    <main class="bg-bgIndigo">
      <img
        class="h-64 w-64 mx-auto"
        :src="planet.featured_img.src"
        :alt="planet.featured_img.alt"
        :title="planet.featured_img.title"
      />
      <PlanetNav :planet="{ title: planet.title, altTitle: planet.altTitle }" />
      <div
        class="h-12 w-64 mx-auto mt-10 flex items-center justify-center rounded-full bg-veryLightGray bg-opacity-25"
      >
        <span
          class="text-16 lowercase font-voyager tracking-wider font-light text-veryLightGray"
          >Points of Interest</span
        >
      </div>
      <p
        class="mt-10 px-12 text-20 leading-6 font-montserrat font-medium text-veryLightGray"
      >
        {{ planet.leadIn }}
      </p>
      <nuxt-content
        :document="planet"
        class="text-veryLightGray font-montserrat font-medium"
      />
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const planet = await $content('planets', params.name).fetch();
    return { planet };
  },
  data() {
    return {
      loading: 'Yes it is loading.',
    };
  },
};
</script>

<style lang="scss" scoped></style>
