<template>
  <div class="recommend-list">
    <ul>
      <li v-for="(item, index) in data" :key="item.id + index">
        <img :src="item.image" alt="" />
        <div>
          <p class="title">{{ item.title }}</p>
          <div class="info">
            <p>
              <span>{{ item.range }}</span>
              <span>{{ item.oldPrice }}</span>
            </p>
            <div>
              <span class="iconfont icon-cfav"></span>
              <span>{{ item.cfav }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RecommendList',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="less" scoped>
.recommend-list {
  border-top: 10px solid #f2f2f2;
  padding: 0 8px;

  ul li {
    display: flex;
    margin-top: 10px;

    img {
      height: 130px;
      border-radius: 4px;
      margin-right: 8px;
    }

    p.title {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    div {
      color: #333;
      font-size: 15px;

      .info {
        margin-top: 15px;

        p {
          span {
            font-size: 13px;
            color: #ff5777;
            padding-right: 5px;
          }

          span + span {
            font-size: 12px;
            color: #999;
            text-decoration: line-through;
          }
        }

        div {
          margin-top: 5px;

          span {
            font-size: 14px;
            padding-right: 5px;
          }

          span + span {
            font-size: 13px;
            color: #666;
          }
        }
      }
    }
  }
}
</style>
