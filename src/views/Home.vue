<template>
  <div class="home">
    <input v-model="num1" type="number" />
    <input v-model="num2" type="number" />
    = {{ result }}
    <div>
      <button @click="calculate">Click</button>
      {{ resultClick }}
    </div>
    <AppButton @click="calculate">Button</AppButton>
    <AppButton to="/about">Router Link</AppButton>
    <AppButton href="/about">&lt;a&gt; Link</AppButton>
  </div>
</template>

<script>
import AppButton from '../components/ui/AppButton.vue';
import multiplication from '../utils/math';

export default {
  name: 'Home',
  components: {
    AppButton
  },
  data() {
    return {
      num1: 0,
      num2: 0,
      resultClick: 0
    };
  },
  computed: {
    result() {
      return multiplication(this.num1, this.num2);
    }
  },
  methods: {
    calculate() {
      this.resultClick = multiplication(this.num1, this.num2);
    }
  }
};
</script>
