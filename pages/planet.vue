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
        <span
          class="text-16 lowercase font-voyager tracking-wider font-light text-veryLightGray"
          >Points of Interest</span
        >
      </div>
      <p
        class="mt-10 px-12 text-20 leading-6 font-montserrat font-medium text-veryLightGray"
      >
        Most of us know Mercury is the closest planet to the Sun but did you
        know it’s not the hottest?
      </p>
      <img
        class="mt-10 mx-auto"
        src="~/assets/svg/mercury-info.svg"
        alt="Mercury Infographic"
      />
      <p
        class="mt-6 px-12 text-14 font-montserrat font-light italic text-mercuryLavender"
      >
        On this scale, Mercury would be about the size of a prairie dog, at 0.50
        m (1.64 ft) in diameter.
      </p>
      <p
        class="mt-12 px-12 text-16 font-montserrat font-medium text-veryLightGray"
      >
        Mercury does have the biggest temperature fluctuations in the solar
        system. Temperature on the dayside can be as hot as 800°F (430°C) but
        the night side is -290°F (-180°C). That’s a 1130°F (610°C) difference!
      </p>
      <p
        class="mt-6 px-12 text-16 font-montserrat font-medium text-veryLightGray"
      >
        It is also the fastest moving planet. It goes around the Sun at 105,906
        mph (170,503 km/h) compared to Earth that only goes 66,622 mph (107,208
        km/h). Which amounts to 29 miles (47 km) every second!
      </p>
      <p
        class="mt-6 px-12 text-16 font-montserrat font-medium text-veryLightGray"
      >
        It spins almost completely upright. It’s only titled 1/30 of a degree on
        its axis- the next closest is Jupiter with a 3.1 degree tilt. Mercury is
        also mostly core. The crust is only 250 miles (400 km) thick making 85%
        of the planet the core. To compare, Earth’s core is 55% its mass.
      </p>
      <p
        class="mt-6 px-12 text-16 font-montserrat font-medium text-veryLightGray"
      >
        Because of how the orbits line up, Mercury actually spends more time
        being closer to Earth than Venus.
      </p>
      <img
        class="mt-12"
        src="~/assets/planets/mercury-topography.png"
        alt="An image of Mercury's topography"
      />
      <p
        class="mt-6 px-12 text-14 font-montserrat font-light italic text-mercuryLavender"
      >
        An image of Mercury’s topography.
      </p>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
