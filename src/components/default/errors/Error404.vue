<template>
  <div class="error__page">
    <div class="error__page_text">
      <h1>404</h1>
      <p>PAGE NOT FOUND</p>
      <button @click="goBackToPage"> Go back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  methods: {
    goBackToPage() {
      this.$router.push({ name: 'homepage' });
    },
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/default/errors/_error404.scss";
</style>
