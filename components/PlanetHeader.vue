<template>
  <div>
    <nav class="px-4 h-12 flex justify-between bg-bgIndigo">
      <nuxt-link to="/" class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="pointer-events-none fill-current text-veryLightGray"
          width="11.854"
          height="16.239"
          viewBox="0 0 11.854 16.239"
        >
          <path
            d="M14.4 22.35a.76.76 0 0 1-.4-.15l-10.65-8L14 6.26a.754.754 0 1 1 .9 1.21l-9 6.75 9 6.78a.75.75 0 0 1 .1 1.05.74.74 0 0 1-.6.3z"
            transform="translate(-3.35 -6.111)"
          />
        </svg>
        <span
          class="pointer-events-none ml-2 uppercase text-16 tracking-wider font-montserrat font-medium text-veryLightGray"
          >back</span
        >
      </nuxt-link>
      <div
        class="flex items-center uppercase text-16 tracking-wider font-montserrat font-medium text-veryLightGray"
      >
        menu
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
