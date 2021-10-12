<template>
  <div class="params-info">
    <table v-for="(item, index) in data.tables" :key="index">
      <tr v-for="(el, ind) in item" :key="ind">
        <td v-for="(e, i) in el" :key="i">{{ e }}</td>
      </tr>
    </table>

    <table>
      <tr v-for="(item, index) in data.info" :key="index">
        <td width="25%">{{ item.key }}</td>
        <td style="color: #e84868">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ParamsInfo',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="less" scoped>
.params-info {
  border-top: 10px solid #f2f2f2;
  padding: 20px 15px;

  table {
    width: 100%;
    font-size: 14px;
    color: #666;

    td {
      border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    }

    tr {
      height: 42px;
    }
  }
}
</style>
