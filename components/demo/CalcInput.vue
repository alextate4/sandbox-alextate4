<template>
  <div>
    <h1>CalcInput</h1>
    <input v-model="number1" type="number" class="border" />
    <input v-model="number2" type="number" class="border" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['num1', 'num2']),
    number1: {
      get() {
        return this.num1;
      },
      set(value) {
        this.setNum1(value);
      },
    },
    number2: {
      get() {
        return this.num2;
      },
      set(value) {
        this.setNum2(value);
      },
    },
  },
  methods: {
    ...mapActions(['setNum1', 'setNum2']),
  },
};
</script>

<style lang="scss" scoped></style>
