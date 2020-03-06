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
        <component-separator/>
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
      <section>
        <div class="homepage__box_tootsy">
          <component-tootsy/>
        </div>
      </section>
      <section>
        <div class="homepage__otherservice">
          <component-other-services/>
        </div>
      </section>
    </div>
</template>

<script>
import ComponentBoxShadow from '@/components/shared/ComponentBoxShadow.vue';
import ComponentBoxAnimated from '@/components/shared/ComponentBoxAnimated.vue';
import ComponentTootsy from '@/components/shared/ComponentTootsy.vue';
import ComponentSeparator from '@/components/shared/ComponentSeparator.vue';
import ComponentOtherServices from '@/components/shared/ComponentOtherServices.vue';

export default {
  name: 'Homepage',
  components: {
    ComponentOtherServices,
    ComponentBoxShadow,
    ComponentBoxAnimated,
    ComponentTootsy,
    ComponentSeparator,
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
          icon: 'gear',
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
