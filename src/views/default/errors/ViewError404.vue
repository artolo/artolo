<template>
  <div class="view__error">
    <Error404/>
  </div>
</template>

<script>
import Error404 from '@/components/default/errors/Error404.vue';

export default {
  name: 'view-error-404',
  components: {
    Error404,
  },
};
</script>
