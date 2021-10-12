<template>
  <div class="count-info">
    <div>
      <p>
        <span>0.00</span>
        <span>元</span>
      </p>
      <p>我的余额</p>
    </div>

    <p class="line" />

    <div>
      <p>
        <span>0</span>
        <span>个</span>
      </p>
      <p>我的优惠</p>
    </div>

    <p class="line" />

    <div>
      <p>
        <span>0</span>
        <span>分</span>
      </p>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountInfo',
}
</script>

<style lang="less" scoped>
.count-info {
  display: flex;

  p.line {
    width: 1px;
    background-color: #f2f2f2;
  }

  > div {
    flex: 1;
    text-align: center;
    padding: 18px;
    font-size: 13px;
    color: #666666;

    span:first-child {
      color: #ff5f3e;
      font-size: 24px;
      font-weight: 700;
    }

    p + p {
      margin-top: 6px;
    }
  }
}
</style>
