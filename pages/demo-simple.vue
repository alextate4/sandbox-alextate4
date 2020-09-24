<template>
  <div class="p-16">
    <input v-model="num1" type="number" class="border" />
    <input v-model="num2" type="number" class="border" />
    <button class="border text-blue-900" @click="calculateMethod">
      Calculate
    </button>
    <div>Result - Method: {{ resultMethod }}</div>
    <div>Result - Computed: {{ caclulateComputed }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: '1',
      num2: '1',
      resultMethod: '1',
    };
  },
  computed: {
    caclulateComputed() {
      return this.num1 * this.num2;
    },
  },
  methods: {
    calculateMethod() {
      this.resultMethod = this.num1 * this.num2;
    },
  },
};
</script>

<style lang="scss" scoped></style>
