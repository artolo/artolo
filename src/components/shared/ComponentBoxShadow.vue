<template>
<div class="componentboxshadow">
  <div class="componentboxshadow__conteiner">
    <div
      class="componentboxshadow__conteiner_box"
      v-if="boxShadowText"
    >
      <div class="componentboxshadow__conteiner_box_shadow">
        <img
          :src="require(`@/assets/img/${icon}.png`)"
          :alt="icon"
        />
        <div class="componentboxshadow__conteiner_box_shadow_line">
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
