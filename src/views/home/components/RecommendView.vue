<template>
  <div class="recomend-view">
    <a v-for="item in data" :key="item.id" class="recomend-view-item" :href="item.link">
      <img :src="item.url" alt="" />
      <p>{{ item.title }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="less" scoped>
.recomend-view {
  display: flex;
  padding: 10px 0 20px;

  .recomend-view-item {
    flex: 1;
    text-align: center;

    img {
      width: 70px;
      margin-bottom: 10px;
    }

    p {
      font-size: 12px;
      color: #666666;
    }
  }
}
</style>
