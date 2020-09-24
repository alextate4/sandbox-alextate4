<template>
  <div>
    <h1>CalcValue</h1>
    <div>Result - Computed: {{ resultComputed }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['resultComputed']),
  },
};
</script>

<style lang="scss" scoped></style>
