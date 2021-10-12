<template>
  <div class="store-info">
    <div class="header">
      <img :src="data.image" alt="" />
      <span>{{ data.name }}</span>
    </div>

    <div class="info">
      <ul>
        <li>
          <p>{{ data.cells | formatSale }}</p>
          <p>总销量</p>
        </li>
        <li>
          <p>{{ data.goods }}</p>
          <p>全部宝贝</p>
        </li>
      </ul>

      <table>
        <tr v-for="(item, index) in data.score" :key="index">
          <td style="color: #333">{{ item.name }}</td>
          <td :style="{ color: item.score >= 5 ? '#f13e3a' : '#5ea732' }">
            {{ item.score }}
          </td>
          <td>
            <span
              :style="{
                backgroundColor: item.score >= 5 ? '#f13e3a' : '#5ea732',
                color: '#fff',
                borderRadius: '2px',
              }"
              >{{ item.score >= 5 ? '高' : '低' }}</span
            >
          </td>
        </tr>
      </table>
    </div>

    <div class="btn">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: 'StoreInfo',
  filters: {
    formatSale(val) {
      if (val > 9999) {
        return (val / 10000).toFixed(1) + '万'
      }

      return val
    },
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="less" scoped>
.store-info {
  border-top: 10px solid #f2f2f2;
  padding: 25px 8px;

  .header {
    height: 45px;
    line-height: 45px;
    margin-bottom: 15px;

    img {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      height: 100%;
      box-sizing: border-box;
    }

    span {
      margin-left: 10px;
      font-size: 16px;
      color: #666;
    }
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      flex: 1;
      border-right: 1px solid rgba(0, 0, 0, 0.1);

      li {
        flex: 1;
        text-align: center;
        color: #333;

        p {
          font-size: 18px;
        }

        p + p {
          font-size: 13px;
          margin-top: 10px;
        }
      }
    }

    table {
      padding-left: 30px;
      width: 150px;
      box-sizing: border-box;

      td {
        font-size: 13px;
        padding: 5px 0;
        white-space: nowrap;
      }
    }
  }

  .btn {
    width: 150px;
    height: 30px;
    margin: 10px auto 0;
    text-align: center;
    line-height: 30px;
    background-color: #f2f5f8;
    color: #666;
    border-radius: 8px;
    font-size: 14px;
  }
}
</style>
