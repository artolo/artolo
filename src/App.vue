<template>
  <div id="app">
    <div class="app__container">
      <the-header/>
      <the-main/>
      <the-footer/>
    </div>
  </div>
</template>
<script>
import TheHeader from '@/components/layout/header/TheHeader.vue';
import TheMain from '@/components/layout/main/TheMain.vue';
import TheFooter from '@/components/layout/footer/TheFooter.vue';

export default {
  name: 'app',
  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },
};
</script>
<style lang="scss">
  @import "~@/assets/scss/_app.scss";
</style>
