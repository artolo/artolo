<template>
  <header
    class="header"
    id="header"
  >
    <template>
      <div class="header__box">
        <div class="header__box_top">
          <div class="header__box_top_logo">
            <component-logo/>
          </div>
          <div class="header__box_top_nav">
            <header-top-nav/>
          </div>
        </div>
      </div>
    </template>
      <template>
        <div class="header__slider">
        <header-slider/>
        </div>
      </template>
  </header>
</template>
<script>
import HeaderSlider from '@/components/layout/header/HeaderSlider.vue';
import HeaderTopNav from '@/components/layout/header/HeaderTopNav.vue';
import ComponentLogo from '@/components/shared/ComponentLogo.vue';

export default {
  name: 'the-header',
  components: {
    HeaderSlider,
    HeaderTopNav,
    ComponentLogo,
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/layout/header/_theheader.scss";
</style>
