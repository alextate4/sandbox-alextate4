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
      <PlanetNav
        :planet="{ title: planet.title, altTitle: planet.altTitle }"
        :planet-name="planetName"
      />
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
      <section>
        <img
          class="mt-10 mx-auto"
          :src="planet.prose.fig_src"
          :alt="planet.prose.fig_alt"
          :title="planet.prose.fig_title"
        />
        <p
          class="mt-6 px-12 text-14 font-montserrat font-light italic"
          :class="`text-${planetName}`"
        >
          {{ planet.prose.fig_caption }}
        </p>
        <p
          v-for="paragraph in formattedProse"
          :key="paragraph.id"
          class="px-12 text-16 text-montserrat font-medium text-veryLightGray"
        >
          {{ paragraph }}
        </p>
      </section>
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
      planetName: '',
      formattedProse: [],
      loading: 'Yes it is loading.',
    };
  },
  mounted() {
    this.planetName = this.$route.params.name;
    this.formatProse();
  },
  methods: {
    formatProse() {
      this.formattedProse = this.planet.prose.body.split(`\n\n`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
