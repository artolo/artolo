<template>
<div class="component__otherservice">
  <div class="component__otherservice_text">
    <h3> DODATKOWE USŁUGI </h3>
    <p> Etiam tincidunt orci et luctus dictum. Nam ut mi eu lorem vehicula tempor ac ut odio.
      Aliquam non ullamcorper tellus. Nullam et nisl pulvinar, gravida magna vitae,
      placerat quam.</p>
    <ul>
      <li>
      <img src="../../assets/img/feature-icon-01a.png" alt="">
      <span>
          Etiam tincidunt orci et luctus dictum. Nam ut mi eu lorem vehicula tempor ac ut odio.
          Aliquam non ullamcorper tellus. Nullam et nisl pulvinar, gravida magna vitae,
          placerat quam. Sed blandit mi non ipsum bibendum condimentum. Quisque pellentesque
          eget nisl quis vehicula
        </span>
    </li>
      <li>
        <img src="../../assets/img/feature-icon-02a.png" alt="">
        <span>
          Etiam tincidunt orci et luctus dictum. Nam ut mi eu lorem vehicula tempor ac ut odio.
          Aliquam non ullamcorper tellus. Nullam et nisl pulvinar, gravida magna vitae,
          placerat quam. Sed blandit mi non ipsum bibendum condimentum. Quisque pellentesque
          eget nisl quis vehicula
        </span>
      </li>
      <li>
        <img src="../../assets/img/feature-icon-03a.png" alt="">
        <span>
          Etiam tincidunt orci et luctus dictum. Nam ut mi eu lorem vehicula tempor ac ut odio.
          Aliquam non ullamcorper tellus. Nullam et nisl pulvinar, gravida magna vitae,
          placerat quam. Sed blandit mi non ipsum bibendum condimentum. Quisque pellentesque
          eget nisl quis vehicula
        </span>
      </li>
    </ul>
  </div>
  <div class="component__otherservice_web" v-animatedScroll>
    <img
      src="../../assets/img/baner_artolo3.jpg"
      alt="sim-bud"
      class="component__otherservice_web_photo"
    >
  </div>
</div>
</template>

<script>
export default {
  name: 'ComponentOtherServices',
};
</script>

<style lang="scss">
  @import "~@/assets/scss/shared/_componentotherservice.scss";
</style>
