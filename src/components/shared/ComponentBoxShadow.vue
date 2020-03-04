<template>
<div class="component__boxshadow">
  <div class="component__boxshadow_container">
    <div
      class="component__boxshadow_container_box"
      v-if="boxShadowText"
    >
      <div class="component__boxshadow_container_box_shadow">
        <img
          :src="require(`@/assets/img/${icon}.png`)"
          :alt="icon"
        />
        <div class="component__boxshadow_container_box_shadow_line">
        </div>
        <p>{{boxShadowText}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'component-box-shadow',
  props: {
    boxShadowText: {
      type: String,
      required: true,
    },
    icon: {
      // arrow-down, arrow-down, close, earth, facebook, gear, globe,
      // mail, person, phone,search, share, shopping-cart, telephone
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
  @import "~@/assets/scss/shared/_componentboxshadow.scss";
</style>
