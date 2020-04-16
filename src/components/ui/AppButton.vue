<template>
  <component
    :is="type"
    :disabled="disabled"
    :href="href"
    :to="to"
    class="button"
    @click="onClick"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  },
  computed: {
    type() {
      if (this.href) {
        return 'a';
      }
      if (this.to) {
        return 'router-link';
      }
      return 'button';
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  all: unset;
  background-color: #44c767;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 17px;
  padding: 16px 31px;
  margin: 0.5em;
}
</style>
