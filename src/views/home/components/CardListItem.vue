<template>
  <div class="card-list-item">
    <img v-lazy="data.image" @load="onLoad" />
    <div>
      <p class="title">{{ data.title }}</p>
      <p class="info">
        <span class="price">{{ data.price }}</span>
        <span class="iconfont icon-cfav"></span>
        <span class="cfav">{{ data.cfav }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardListItem',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onLoad() {
      this.$bus.$emit('imageLoad')
    },
  },
}
</script>

<style lang="less" scoped>
.card-list-item {
  width: 48%;
  padding-bottom: 40px;
  position: relative;

  img {
    width: 100%;
    border-radius: 5px;
  }

  > div {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;

    .title {
      white-space: nowrap;
      overflow: hidden;
      font-size: 12px;
      color: #666666;
      text-overflow: ellipsis;
    }

    .info {
      text-align: center;
      margin-bottom: 2px;
      color: #666666;

      .price {
        color: #ff5777;
        padding-right: 5px;
        font-size: 12px;
      }

      .iconfont {
        font-size: 14px;
        margin-right: 2px;
      }

      .cfav {
        font-size: 12px;
      }
    }
  }
}
</style>
