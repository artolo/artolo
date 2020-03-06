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
        <component-separator
          :short="true"
        />
        <p>{{boxShadowText}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ComponentSeparator from '@/components/shared/ComponentSeparator.vue';

export default {
  name: 'component-box-shadow',
  components: { ComponentSeparator },
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
