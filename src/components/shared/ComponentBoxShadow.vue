<template>
<div class="componentboxshadow">
  <div class="componentboxshadow__conteiner">
    <div class="componentboxshadow__conteiner_box" v-if="boxLabelOne">
      <div class="componentboxshadow__conteiner_box_shadow">
        <img src="../../assets/img/iconfinder_shopping_cart.png" alt="phone"/>
        <div class="componentboxshadow__conteiner_box_shadow_line">
        </div>
        <p>{{boxLabelOne}}</p>
      </div>
    </div>
    <div class="componentboxshadow__conteiner_box" v-if="boxLabelTwo">
      <div class="componentboxshadow__conteiner_box_shadow">
        <img src="../../assets/img/iconfinder_globe.png" alt="globe"/>
        <div class="componentboxshadow__conteiner_box_shadow_line"></div>
        <p>{{boxLabelTwo}}</p>
      </div>
    </div>
    <div class="componentboxshadow__conteiner_box" v-if="boxLabelThree">
      <div class="componentboxshadow__conteiner_box_shadow">
        <img src="../../assets/img/iconfinder_phone.png" alt="card"/>
        <div class="componentboxshadow__conteiner_box_shadow_line" width="20%"></div>
        <p>{{boxLabelThree}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'component-box-shadow',
  props: {
    boxLabelOne: {
      type: String,
      required: true,
    },
    boxLabelTwo: {
      type: String,
    },
    boxLabelThree: {
      type: String,
    },
  },
};
</script>
<style lang="scss">
  @import "~@/assets/scss/shared/_componentboxshadow.scss";
</style>
