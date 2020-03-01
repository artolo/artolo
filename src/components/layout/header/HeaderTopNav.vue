<template>
  <div class="header__box_top_nav_items">
    <component-hamburger
      v-if="activeHamburger"
      :data-nav="items"
    />
    <ul>
      <li v-for="item in items" :key="item.name">
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import ComponentHamburger from '@/components/shared/ComponentHamburger.vue';

export default {
  name: 'HeaderTopNav',
  components: {
    ComponentHamburger,
  },
  data() {
    return {
      items: [
        {
          name: 'Home',
        },
        {
          name: 'Oferta',
        },
        {
          name: 'Realizacje',
        },
      ],
    };
  },
  props: {
    activeHamburger: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    menuList() {
      return this.items;
    },
  },
};
</script>
