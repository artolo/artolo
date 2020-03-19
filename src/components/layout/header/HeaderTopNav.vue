<template>
  <div class="header__box_top_nav_items">
    <div class="header__box_top_nav_items_hamburger">
      <button
        :class="!hamburgerBox ? 'header__box_top_nav_items_hamburger_line' :
        'header__box_top_nav_items_hamburger_line--active'"
        @click="hamburgerBoxActive"
      >
      <span class="header__box_top_nav_items_hamburger_line_box">
        <span :class="'header__box_top_nav_items_hamburger_line_inner'"></span>
    </span>
      </button>
      <div :class="!hamburgerBox ? 'header__box_top_nav_items_hamburger_menu' :
      'header__box_top_nav_items_hamburger_menu--active'">
        <div class="columns is-vcentered">
          <div class="column is-narrow">
            <ul>
              <li v-for="item in items" :key="item.id">
                <router-link :to="{name: item.routeName}">
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
            <div class="header__box_top_nav_items_hamburger_menu_backgraund"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'HeaderTopNav',
  components: {
  },
  data() {
    return {
      hamburgerBox: false,
      items: [
        {
          name: 'Home',
          routeName: 'homepage',
        },
        {
          name: 'O nas',
          routeName: 'about',
        },
        /* {
          name: 'Realizacje',
          routeName: 'portfolio',
        }, */
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
  methods: {
    hamburgerBoxActive() {
      this.hamburgerBox = !this.hamburgerBox;
    },
  },
};
</script>
<style lang="scss">
  @import "~@/assets/scss/shared/_componenthamburger.scss";
</style>
