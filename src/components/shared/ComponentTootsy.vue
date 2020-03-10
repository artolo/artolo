<template>
  <div class="component__tootsy">
    <img
      src="../../assets/img/baner_artolo2.jpg"
      alt="background"
      class="component__tootsy_background"
    >
    <div class="component__tootsy_grid">
      <div class="component__tootsy_grid_text">
        <img
          :src="require(`@/assets/img/${tootsyIcon}.png`)"
          :alt="tootsyIcon"
          class="component__tootsy_grid_point"
        >
        <component-separator
          :short="true"
          class="component__tootsy_grid_separator"
        />
        <p>{{ tootsyText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentSeparator from '@/components/shared/ComponentSeparator.vue';

export default {
  name: 'component-box-points',
  components: { ComponentSeparator },
  props: {
    tootsyText: {
      type: String,
      required: true,
    },
    tootsyIcon: {
      // I suggest:  feature-icon-01, feature-icon-02, feature-icon-03
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/shared/_componentboxtootsy.scss";
</style>
