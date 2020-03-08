<template>
  <div class="form__silder3d">
    <div :class="[!hiddenMobile ? 'form__silder3d_slide' : 'form__silder3d_slide--hidden']">
      <p>{{ title }}</p>
        <carousel3d>
          <div class="form__silder3d_slide" v-for="(item, index) in items" :key="index">
            <slide :index="index">
              <img :src="require(`@/assets/img/${item.photo}.png`)" :alt="item.text">
            </slide>
          </div>
        </carousel3d>
    </div>
  </div>
</template>

<script>
import { Carousel3d } from 'vue-carousel-3d';

export default {
  name: 'form-slider-3d',
  components: {
    Carousel3d,
  },
  props: {
    items: {
      type: [Array, String],
      required: true,
    },
    title: {
      type: String,
    },
    hiddenMobile: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/form/_formslider3d.scss";
</style>
