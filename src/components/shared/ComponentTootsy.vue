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
          src="../../assets/img/feature-icon-02.png"
          alt="point"
          class="component__tootsy_grid_point"
        >
        <component-separator
          :short="true"
          class="component__tootsy_grid_separator"
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi sollicitudin mollis diam. Sed pellentesque velit non mollis blandit.
          Suspendisse diam ligula, dictum et diam et, consectetureleifend enim. Nam vulputate
          vel neque sed tincidunt.</p>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentSeparator from '@/components/shared/ComponentSeparator.vue';

export default {
  name: 'component-box-points',
  components: { ComponentSeparator },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/shared/_componentboxtootsy.scss";
</style>
