<template>
  <div class="tabbar-item">
    <router-link :to="to" tag="div">
      <div class="tabbar-item-icon" :style="{ color: to === path ? activeColor : inactiveColor }">
        <slot name="icon" />
      </div>

      <div class="tabbar-item-text" :style="{ color: to === path ? activeColor : inactiveColor }">
        <slot name="text" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    to: {
      type: String,
      default: '',
    },
    activeColor: {
      type: String,
      default: '',
    },
    inactiveColor: {
      type: String,
      default: '',
    },
  },
  computed: {
    path() {
      return this.$route.path
    },
  },
}
</script>

<style lang="less" scoped>
.tabbar-item {
  flex: 1;

  /deep/ .tabbar-item-icon {
    margin: 5px 0 4px;
    .iconfont {
      font-size: 20px;
    }
  }

  .tabbar-item-text {
    font-size: 12px;
  }
}
</style>
