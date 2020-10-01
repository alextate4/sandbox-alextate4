<template>
  <div>
    <PlanetHeader />
    <main class="bg-bgIndigo">
      <img
        class="h-64 w-64 mx-auto"
        src="~/assets/planets/mercury.png"
        alt="An image of planet Mercury"
      />
      <PlanetNav />
      <div
        class="h-12 w-64 mx-auto mt-10 flex items-center justify-center rounded-full bg-veryLightGray bg-opacity-25"
      >
        <span class="font-voyager-light text-veryLightGray"
          >Points of Interest</span
        >
      </div>
      <p class="mt-10 px-12 text-xl font-montserrat-medium text-veryLightGray">
        Most of us know Mercury is the closest planet to the Sun but did you
        know it’s not the hottest?
      </p>
      <svg class=""></svg>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
