<template>
  <div class="container">
    <nuxt-link to="/demo-simple">Demo - Simple</nuxt-link>
    <nuxt-link to="/demo-vuex">Demo - Vuex</nuxt-link>
  </div>
</template>

<script>
export default {
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
