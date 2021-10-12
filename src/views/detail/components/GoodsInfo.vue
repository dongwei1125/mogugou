<template>
  <div class="goods-info">
    <p class="title">{{ data.title }}</p>
    <p>
      <span class="range">{{ data.range }}</span>
      <span class="price">{{ data.oldPrice }}</span>
    </p>
    <ul class="columns">
      <li v-for="(item, index) in data.columns" :key="index">{{ item }}</li>
    </ul>
    <ul class="services">
      <li v-for="(item, index) in data.services" :key="index">
        <span>
          <img :src="item.image" alt="" />
          <span>{{ item.name }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GoodsInfo',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="less" scoped>
.goods-info {
  padding: 15px 8px 0;

  .title {
    font-size: 16px;
    color: #999;
  }

  .range {
    font-size: 24px;
    color: #ff5777;
  }

  .price {
    font-size: 13px;
    color: #999;
    text-decoration: line-through;
    margin-left: 5px;
  }

  ul.columns {
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    margin-top: 15px;
    font-size: 13px;
    color: #999;
  }

  ul.services {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #333;
    height: 60px;
    line-height: 60px;

    li > span {
      position: relative;

      span {
        padding-left: 14px;
      }

      img {
        width: 14px;
        position: absolute;
        left: 0;
        bottom: 2px;
      }
    }
  }
}
</style>
