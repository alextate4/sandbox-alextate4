<template>
  <div class="container">
    <nuxt-link to="/planet">Planet Page</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: 'Yes it is loading.',
    };
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
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
