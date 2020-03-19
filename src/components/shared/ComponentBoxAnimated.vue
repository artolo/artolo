<template>
  <div class="component" >
    <div :class="[
    `component__boxanimated`,
    shadesOfBlue ? `component__boxanimated--${shadesOfBlue}` : ''
    ]">
      <img
        :src="require(`@/assets/img/${img}.png`)"
        :alt="img"
        class="component__boxanimated_animation"
        v-animatedScroll
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'component-box-animated',
  props: {
    // artolo-home-web, artolo-home-responsive
    img: {
      type: String,
      required: true,
    },
    // expresive-blue, dark-blue, navy-blue, light-grey, grey, white
    shadesOfBlue: {
      type: String,
      default: 'grey',
    },
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/shared/_componentboxanimated.scss";
</style>
