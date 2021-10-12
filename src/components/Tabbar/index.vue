<template>
  <div class="tabbar">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
}
</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  border-top: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
  text-align: center;
  z-index: 9999;
}
</style>
