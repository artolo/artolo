<template>
    <div class="homepage">
      <section>
        <component-box-shadow
          :box-label-one="webText"
          :srcOne="'cart'"
          :box-label-two="webText"
          :box-label-three="webText"
        />
      </section>
    </div>
</template>

<script>
import ComponentBoxShadow from '@/components/shared/ComponentBoxShadow.vue';

export default {
  name: 'Homepage',
  components: {
    ComponentBoxShadow,
  },
  data() {
    return {
      webText: 'Zaprezentuj profesjonalnie swoją ofertę w Internecie. Kompleksowo budujemy nowe strony i modernizujemy już istniejące.',
    };
  },
};
</script>
<style lang="scss">
  @import "~@/assets/scss/_homepage.scss";
</style>
