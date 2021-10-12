<template>
  <div class="user-info">
    <div>
      <img src="~assets/img/avatar.png" alt="" />
      <div class="info">
        <p>登录/注册</p>
        <p>
          <span class="iconfont icon-phone"></span>
          <span class="hasnot">暂无绑定手机号</span>
        </p>
      </div>
    </div>
    <span class="iconfont icon-rarrow"></span>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
}
</script>

<style lang="less" scoped>
.user-info {
  height: 85px;
  background-color: #ff8198;
  padding: 6px 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    img {
      width: 70px;
    }

    .info {
      margin-left: 15px;
      color: #fff;
      font-size: 16px;
      position: relative;

      p > span {
        font-size: 13px;
      }

      p + p {
        padding-left: 20px;
        margin-top: 5px;
      }

      .icon-phone {
        font-size: 20px;
        position: absolute;
        left: 0;
      }
    }
  }

  .icon-rarrow {
    color: #fff;
    font-size: 20px;
  }
}
</style>
