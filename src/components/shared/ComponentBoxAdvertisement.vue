<template>
  <div class="componentbox__advertisement">
    <div :class="photoOnTheLeft ?
    'componentbox__advertisement_box':
    'componentbox__advertisement_box--left'">
      <div class="componentbox__advertisement_box_photo">
        <img
          :src="require(`@/assets/img/artolo-about-${photo}.jpg`)"
          :alt="`photo-about-us-${photo}`">
      </div>
      <div class="componentbox__advertisement_box_content">
        <h1> {{ upperText }} </h1>
        <p> {{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ComponentBoxAdvertisement',
  props: {
    photo: {
      type: Number,
      default: 3,
    },
    photoOnTheLeft: {
      type: Boolean,
      default: false,
      required: true,
    },
    upperText: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/shared/_componentboxadvertisement.scss";
</style>
