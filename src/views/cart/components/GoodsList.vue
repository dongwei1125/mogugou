<template>
  <ul class="goods-list">
    <li v-for="item in data" :key="item.id" @click="item.checked = !item.checked">
      <div class="button">
        <check-button v-model="item.checked" />
      </div>

      <div class="image">
        <img :src="item.image" alt="" />
      </div>

      <div class="info">
        <p class="title">{{ item.title }}</p>
        <p class="desc">{{ item.desc }}</p>
        <p class="price">
          <span>￥{{ item.price }}</span>
          <span>x {{ item.count }}</span>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import CheckButton from 'components/CheckButton'

export default {
  name: 'GoodsList',
  components: {
    CheckButton,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="less" scoped>
.goods-list {
  li {
    padding: 5px;
    display: flex;
    border-bottom: 1px solid #ccc;

    .button {
      display: flex;
      align-items: center;
    }

    .image {
      padding: 5px;
      img {
        border-radius: 5px;
        width: 80px;
        height: 100px;
      }
    }

    .title,
    .desc {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .title {
      color: #333333;
      font-size: 16px;
    }

    .desc {
      font-size: 14px;
      color: #666;
      margin-top: 10px;
    }

    .info {
      padding: 5px 10px;
      flex: 1;
    }

    .price {
      margin-top: 10px;

      span {
        color: orangered;
        font-size: 18px;
      }

      span + span {
        float: right;
        font-size: 15px;
        color: #333333;
      }
    }
  }
}
</style>
