<template>
    <div class="homepage__box">
      <section>
        <div class="homepage__box_shadows" v-for="(item, index) in items" :key="index">
            <component-box-shadow
              class="homepage__box_shadows_component"
              :box-shadow-text="item.text"
              :icon="item.icon"
            />
        </div>
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
      items: [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo in nunc in tincidunt. Vivamus scelerisque arcu ut finibus...',
          icon: 'shopping-cart',
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo in nunc in tincidunt. Vivamus scelerisque arcu ut finibus...',
          icon: 'globe',
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo in nunc in tincidunt. Vivamus scelerisque arcu ut finibus...',
          icon: 'phone',
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo in nunc in tincidunt. Vivamus scelerisque arcu ut finibus...',
          icon: 'person',
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo in nunc in tincidunt. Vivamus scelerisque arcu ut finibus...',
          icon: 'arrow-down',
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo in nunc in tincidunt. Vivamus scelerisque arcu ut finibus...',
          icon: 'facebook',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
  @import "~@/assets/scss/_homepage.scss";
</style>
