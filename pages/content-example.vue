<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title text-primary">kss</h1>
      <nuxt-link to="/">Nuxt Link to Home</nuxt-link>
      <NuxtContent
        class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
        :document="document"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const document = await $content('hello').fetch();
    return { document };
  },
  data() {
    return {
      loading: 'Yes it is loading.',
    };
  },
  mounted() {
    console.log('this');
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
