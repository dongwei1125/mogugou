<template>
  <div v-if="show">
    <common-tabbar>
      <common-tabbar-item to="/home" active-color="#ff8198" inactive-color="#555555">
        <i slot="icon" class="iconfont icon-home"></i>
        <span slot="text">首页</span>
      </common-tabbar-item>

      <common-tabbar-item to="/category" active-color="#ff8198" inactive-color="#555555">
        <i slot="icon" class="iconfont icon-category"></i>
        <span slot="text">分类</span>
      </common-tabbar-item>

      <common-tabbar-item to="/cart" active-color="#ff8198" inactive-color="#555555">
        <i slot="icon" class="iconfont icon-cart"></i>
        <span slot="text">购物车</span>
      </common-tabbar-item>

      <common-tabbar-item to="/profile" active-color="#ff8198" inactive-color="#555555">
        <i slot="icon" class="iconfont icon-profile"></i>
        <span slot="text">我的</span>
      </common-tabbar-item>
    </common-tabbar>
  </div>
</template>

<script>
import CommonTabbar from 'components/Tabbar'
import CommonTabbarItem from 'components/TabbarItem'

export default {
  name: 'Tabbar',
  components: {
    CommonTabbar,
    CommonTabbarItem,
  },
  props: {
    exclude: {
      type: String,
      default: '',
    },
  },
  computed: {
    show() {
      const excludes = this.exclude.split(',')
      return !excludes.includes(this.$route.name)
    },
  },
}
</script>
