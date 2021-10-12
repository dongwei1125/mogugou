<template>
  <div class="submit-bar">
    <div class="serve">
      <span class="iconfont icon-serv"></span>
      <p>客服</p>
    </div>

    <div class="serve">
      <span class="iconfont icon-store"></span>
      <p>店铺</p>
    </div>

    <div class="serve">
      <span class="iconfont icon-fav"></span>
      <p>收藏</p>
    </div>

    <div class="add" @click="$emit('on-add')">添加</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  name: 'SubmitBar',
}
</script>

<style lang="less" scoped>
.submit-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  display: flex;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);

  div {
    flex: 1;
    text-align: center;
  }

  div.btn {
    font-size: 14px;
  }

  div.serve {
    width: 16%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #666;
    span {
      font-size: 18px;
    }

    p {
      font-size: 12px;
      margin-top: 5px;
    }
  }

  div.add {
    width: 26%;
    background-color: #ffe817;
    font-size: 13px;
    text-align: center;
    line-height: 49px;
    color: #fff;
  }

  div.buy {
    width: 26%;
    background-color: #ff6699;
    font-size: 13px;
    text-align: center;
    line-height: 49px;
    color: #fff;
  }
}
</style>
