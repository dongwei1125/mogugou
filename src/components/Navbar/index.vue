<template>
  <div class="navbar" :style="{ backgroundColor: backgroundColor }">
    <div class="navbar-left">
      <slot name="left" />
    </div>

    <div class="navbar-center">
      <slot name="default" />
    </div>

    <div class="navbar-right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    backgroundColor: {
      type: String,
      default: '#fff',
    },
  },
}
</script>

<style lang="less" scoped>
.navbar {
  height: 44px;
  line-height: 44px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 9999;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);

  .navbar-left,
  .navbar-right {
    width: 60px;
    text-align: center;
  }

  .navbar-center {
    flex: 1;
    font-size: 14px;
    color: #ffffff;
    text-align: center;
  }
}
</style>
