<template>
  <footer>
    <div class="columns is-vcentered">
      <div class="column is-narrow">
        <div class="footer__text">{{footerText}}</div>
      </div>
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

<style scoped>

</style>
