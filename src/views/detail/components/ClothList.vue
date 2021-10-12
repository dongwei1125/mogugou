<template>
  <div class="cloth-list">
    <div class="desc">
      <div class="line l-line"></div>
      <p>{{ data.desc }}</p>
      <div class="line r-line"></div>
    </div>

    <div class="detail">
      <div v-for="(item, index) in data.detail" :key="index" class="detail-item">
        <p>{{ item.name }}</p>
        <ul v-for="(e, i) in item.list" :key="i">
          <li>
            <img :src="e" alt="" @load="onLoad" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClothList',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onLoad() {
      this.$bus.$emit('detailLoad')
    },
  },
}
</script>

<style lang="less" scoped>
.cloth-list {
  border-top: 10px solid #f2f2f2;
  padding: 5px;

  .desc {
    position: relative;

    .line {
      width: 90px;
      height: 1px;
      background-color: #a3a3a5;
    }

    .l-line::before {
      content: '';
      display: block;
      width: 5px;
      background-color: #333;
      height: 5px;
    }

    .r-line {
      position: absolute;
      right: 0;
      bottom: 0;

      &::after {
        content: '';
        display: block;
        float: right;
        width: 5px;
        height: 5px;
        background-color: #333;
      }
    }

    p {
      padding: 15px 0;
      font-size: 14px;
      color: #666;
    }
  }

  .detail {
    p {
      font-size: 15px;
      color: #333;
      margin: 10px 0px 0px 15px;
    }

    img {
      width: 100%;
    }
  }
}
</style>
