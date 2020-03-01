<template>
  <div class="header__top">
      <div class="header__top_logo">
        <component-logo/>
      </div>
      <div class="header__top_nav">
        <header-top-nav/>
      </div>
  </div>
</template>

<script>
import HeaderTopNav from '@/components/layout/header/HeaderTopNav.vue';
import ComponentLogo from '@/components/shared/ComponentLogo.vue';

export default {
  name: 'header-top',
  components: {
    HeaderTopNav,
    ComponentLogo,
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/layout/header/_theheader.scss";
</style>
