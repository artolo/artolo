<template>
  <main id="main">
    <div class="main__box">
      <MainContent/>
    </div>
  </main>
</template>

<script>
import MainContent from '@/components/layout/main/MainContent.vue';

export default {
  name: 'the-main',
  components: {
    MainContent,
  },
};
</script>

<style lang="scss">

</style>
