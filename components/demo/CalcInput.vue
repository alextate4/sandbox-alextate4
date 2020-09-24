<template>
  <div>
    <h1>CalcInput</h1>
    <input v-model="num1" type="number" class="border" />
    <input v-model="num2" type="number" class="border" />
  </div>
</template>

<script>
export default {
  computed: {
    num1: {
      get() {
        return this.$store.state.num1;
      },
      set(value) {
        this.$store.commit('setNum1', value);
      },
    },
    num2: {
      get() {
        return this.$store.state.num2;
      },
      set(value) {
        this.$store.commit('setNum2', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
