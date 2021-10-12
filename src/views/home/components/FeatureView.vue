<template>
  <div class="feature-view">
    <a :href="options.link">
      <img :src="options.url" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'FeatureView',
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="less" scoped>
.feature-view {
  a {
    display: block;
    width: 100%;

    img {
      width: 100%;
      border-top: 10px solid #f2f2f2;
      border-bottom: 10px solid #f2f2f2;
    }
  }
}
</style>
