<template>
  <main class="main" id="main">
    <div class="main__content">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </main>
</template>

<script>

export default {
  name: 'the-main',
};
</script>
<style lang="scss">
  @import "~@/assets/scss/layout/main/_themain.scss";
</style>
