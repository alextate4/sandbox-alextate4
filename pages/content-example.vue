<template>
  <div class="container">
    <div class="p-16">
      <nuxt-link to="/" class="text-blue-neptuneBlue hover:underline"
        >Nuxt Link to Home</nuxt-link
      >
      <p>{{ document.title }}</p>
      <p>{{ document.description }}</p>
      <nuxt-content
        class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
        :document="document"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const document = await $content('blog', '2020-09-27-testing').fetch();
    return { document };
  },
  data() {
    return {
      loading: 'Yes it is loading.',
    };
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {qs
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
