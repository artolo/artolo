<template>
  <footer class="footer">
    <div class="footer__box">
    </div>
  </footer>
</template>

<script>
export default {
  name: 'the-footer',
  data() {
    return {
      footerText: '© 2020 Strony internerowe Artolo.pl\n'
        + 'Nowiny, ul. Długa 37',
    };
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/layout/footer/_thefooter.scss";
</style>
