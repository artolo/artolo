<template>
  <div :class="[
  'component',
  'component__separator',
  vertical ? 'component__separator--vertical' : '',
  short ? 'component__separator--short' : '',
  ]">
  </div>
</template>

<script>
export default {
  name: 'component-separator',
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
    short: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/shared/_componentseparator";
</style>
