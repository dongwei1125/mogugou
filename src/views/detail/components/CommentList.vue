<template>
  <div v-if="data.length" class="comment-list">
    <div class="header">
      <span class="title">用户评价</span>
      <div class="more">
        <span>更多</span>
        <span class="iconfont icon-rarrow"></span>
      </div>
    </div>

    <ul>
      <li v-for="(item, index) in data" :key="index">
        <div>
          <img :src="item.user.avatar" alt="" />
          <span>{{ item.user.uname }}</span>
        </div>
        <p class="content">{{ item.content }}</p>
        <p class="info">
          <span>{{ item.created | formatTime }}</span>
          <span>{{ item.style }}</span>
        </p>
        <span class="explain">
          {{ item.explain }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  filters: {
    formatTime(val) {
      const date = new Date(val * 1000)
      const YY = date.getFullYear()
      const MM = date.getMonth() + 1
      const DD = date.getDate()
      const HH = date.getHours()
      const mm = date.getMinutes()
      const SS = date.getSeconds()

      function zero(value) {
        return `${value < 10 ? `0${value}` : value}`
      }

      return `${zero(YY)}-${zero(MM)}-${zero(DD)} ${zero(HH)}:${zero(mm)}:${zero(SS)}`
    },
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
.comment-list {
  border-top: 10px solid #f2f2f2;
  padding: 5px 12px;

  .header {
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: #333;

    .title {
      font-size: 15px;
    }

    .more {
      span {
        font-size: 13px;
      }
      .iconfont {
        font-size: 16px;
      }
    }
  }

  ul li {
    padding-top: 10px;

    div {
      img {
        width: 42px;
        border-radius: 50%;
        vertical-align: middle;
      }

      span {
        font-size: 15px;
        color: #333;
        margin-left: 10px;
      }
    }

    .content {
      font-size: 14px;
      color: #777;
      padding: 5px 0 10px;
    }

    .info {
      font-size: 12px;
      color: #999;
    }

    .explain {
      font-size: 12px;
      color: #999;
      padding-top: 2px;
    }
  }
}
</style>
