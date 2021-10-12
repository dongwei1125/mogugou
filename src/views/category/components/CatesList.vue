<template>
  <ul class="cates-list">
    <li v-for="item in data" :key="item.id">{{ item.title }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CatesList',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="less" scoped>
.cates-list {
  padding: 8px;

  li {
    display: inline-block;
    background-color: #ff8198;
    padding: 5px 8px;
    border-radius: 4px;
    color: #fff;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 12px;
  }
}
</style>
