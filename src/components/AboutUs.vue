<template>
  <div class="aboutus">
    <div class="aboutus__content">
      <section>
        <div class="aboutus__content_top">
          <div class="aboutus__content_top_avatar">
            <img src="../assets/img/artolo-about-1.jpg" alt="">
          </div>
          <div class="aboutus__content_top_text">
            <h4> {{ topText }} </h4>
            <p> {{ aboutUs }} </p>
          </div>
        </div>
        <component-separator/>
      </section>
      <section style="display: inline-flex; margin-bottom: 3rem">
        <div class="aboutus__box_shadows" v-for="(item, index) in items" :key="index">
          <component-box-shadow
            class="aboutus__content_component"
            :box-shadow-text="item.text"
            :icon="item.icon"
          />
        </div>
      </section>
      <section>
        <div class="aboutus__content_animated">
          <component-box-animated
            :img="'artolo-home-responsive'"
            :shades-of-blue="'dark-blue'"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ComponentBoxAnimated from '@/components/shared/ComponentBoxAnimated.vue';
import ComponentBoxShadow from '@/components/shared/ComponentBoxShadow.vue';
import ComponentSeparator from '@/components/shared/ComponentSeparator.vue';

export default {
  name: 'AboutUs',
  // eslint-disable-next-line vue/no-unused-components
  components: {
    ComponentSeparator, ComponentBoxShadow, ComponentBoxAnimated,
  },
  data() {
    return {
      topText: 'Kilka słów o nas',
      aboutUs: 'Nullam malesuada nunc ante. Nulla auctor purus ut cursus elementum. '
        + 'Mauris quis finibus metus. Ut ut tempor lectus. Integer varius luctus fermentum. '
        + 'Curabitur eu finibus augue. Aliquam vel fermentum mauris. Vestibulum maximus '
        + 'maximus ante, sed pretium mi sodales eu. Donec eget lacus et neque ultrices '
        + 'malesuada. Integer sed ultrices metus.',
      items: [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo in nunc in tincidunt. Vivamus scelerisque arcu ut finibus...',
          icon: 'phone',
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo in nunc in tincidunt. Vivamus scelerisque arcu ut finibus...',
          icon: 'mail',
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo in nunc in tincidunt. Vivamus scelerisque arcu ut finibus...',
          icon: 'search',
        },
      ],
      textTootsy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n'
        + 'Morbi sollicitudin mollis diam. Sed pellentesque velit non mollis blandit.\n'
        + 'Suspendisse diam ligula, dictum et diam et, consectetureleifend enim. Nam vulputate\n'
        + 'vel neque sed tincidunt.',
    };
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/_aboutus.scss";
</style>
