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
      <section>
        <div class="homepage__box_text" v-animatedScroll>
          <h1>Lorem Ipsum</h1>
          <p>{{textContent}}</p>
        </div>
      </section>
      <section>
        <div class="homepage__box_animated">
          <component-box-animated
            :img="'artolo-home-web'"
            :shades-of-blue="'expresive-blue'"
          />
        </div>
      </section>
    </div>
</template>

<script>
import ComponentBoxShadow from '@/components/shared/ComponentBoxShadow.vue';
import ComponentBoxAnimated from '@/components/shared/ComponentBoxAnimated.vue';

export default {
  name: 'Homepage',
  components: {
    ComponentBoxShadow,
    ComponentBoxAnimated,
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
      textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin mollis diam.'
        + 'Sed pellentesque velit non mollis blandit. Suspendisse diam ligula, dictum et diam et, consectetur'
        + 'eleifend enim. Nam vulputate vel neque sed tincidunt. Morbi feugiat lectus sed erat gravida, nec'
        + 'ultrices lectus faucibus. Cras vestibulum euismod orci, in suscipit ligula rhoncus maximus.',
    };
  },
};
</script>
<style lang="scss">
  @import "~@/assets/scss/_homepage.scss";
</style>
