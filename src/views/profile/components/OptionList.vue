<template>
  <div class="option-list">
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <span :class="['iconfont', item.iconClass]"></span>
        <div>{{ item.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OptionList',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="less" scoped>
.option-list {
  border-top: 15px solid #f2f2f2;

  ul li {
    height: 44px;
    line-height: 44px;
    position: relative;

    span {
      position: absolute;
      left: 13px;
      color: #ff8198;
      font-size: 20px;
    }

    div {
      margin-left: 40px;
      border-bottom: 1px solid #f2f2f2;
      font-size: 15px;
      color: #333;
    }
  }
}
</style>
