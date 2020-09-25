<template>
  <div>
    <nav class="px-4 h-12 flex justify-between bg-bgIndigo">
      <div class="flex items-center">
        <div class="text-veryLightGray text-xl">&lt;</div>
        <span class="ml-2 text-base text-veryLightGray">Back</span>
      </div>
      <div class="flex items-center text-base text-veryLightGray">Menu</div>
    </nav>
    <main class="bg-bgIndigo">
      <img
        class="h-64 w-64 mx-auto"
        src="../assets/planets/mercury.png"
        alt="An image of planet Mercury"
      />
      <div class="mt-8 flex justify-between items-center">
        <div
          class="h-12 w-8 rounded-tr-full rounded-br-full relative flex items-center opacity-50 bg-slateGray text-bgIndigo"
        >
          <span class="pl-2 absolute left-0 text-xl">&lt;</span>
        </div>
        <div class="text-center">
          <h1 class="text-4xl text-veryLightGray">Mercury</h1>
          <span class="text-xl text-mercuryLavender">The Swift Planet</span>
        </div>
        <div
          class="h-12 w-8 rounded-tl-full rounded-bl-full relative flex items-center opacity-50 bg-slateGray text-bgIndigo"
        >
          <span class="pr-2 absolute right-0 text-xl">&gt;</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
