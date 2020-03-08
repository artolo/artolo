<template>
  <footer class="footer">
    <div class="footer__contactform">
      <form-contactform/>
    </div>
    <div class="footer__slider">
      <form-slider3d
        :items="myProjects"
        :title="'Przykładowe realizacje'"
        :hidden-mobile="true"
        />
    </div>
    <h4>{{footerText}}</h4>
  </footer>
</template>

<script>
import FormContactform from '@/components/forms/FormContactform.vue';
import FormSlider3d from '@/components/forms/FormSlider3d.vue';

export default {
  name: 'the-footer',
  components: { FormSlider3d, FormContactform },
  data() {
    return {
      footerText: '© 2020 Artolo.pl',
      myProjects: [
        {
          text: 'www.sim-bud.pl',
          photo: 'artolo-slider-1',
        },
        {
          text: 'www.bramstar.pl',
          photo: 'artolo-slider-2',
        },
        {
          text: 'www.polskioptyk.pl',
          photo: 'artolo-slider-3',
        },
        {
          text: 'www.wedding-studio.pl',
          photo: 'artolo-slider-4',
        },
        {
          text: 'www.rogowska-godela.pl',
          photo: 'artolo-slider-5',
        },
        {
          text: 'www.focusoptic.pl',
          photo: 'artolo-slider-6',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/layout/footer/_thefooter.scss";
</style>
