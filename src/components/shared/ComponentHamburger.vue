<template>
  <div class="component__hamburger">
    <button
    :class="hamburgerBox ? 'component__hamburger_line' : 'component__hamburger_line--active'"
    @click="hamburgerBoxActive"
  >
      <span class="component__hamburger_line_box">
        <span :class="'component__hamburger_line_inner'"></span>
    </span>
    </button>
    <div class="'component__hamburger_navigation'">
      <ul>
        <li v-for="(item, index) in dataNav" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'component-hamburger',
  data() {
    return {
      hamburgerBox: false,
    };
  },
  props: {
    dataNav: {
      type: Array,
      default: () => [],
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
  @import "~@/assets/scss/layout/shared/_componenthamburger.scss";
</style>
