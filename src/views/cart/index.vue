<template>
  <div class="m-cart">
    <navbar background-color="#ff8198">购物车</navbar>

    <better-scroll
      ref="scroll"
      class="scroll"
      :scroll="false"
      :pull-down="false"
      :pull-up="false"
      :probe-type="3"
    >
      <goods-list :data="data" />
    </better-scroll>

    <total-bar :data="data" />
  </div>
</template>

<script>
import Navbar from 'components/Navbar'
import BetterScroll from 'components/BetterScroll'

import GoodsList from './components/GoodsList'
import TotalBar from './components/TotalBar'

export default {
  name: 'Cart',
  components: {
    Navbar,
    BetterScroll,
    GoodsList,
    TotalBar,
  },
  computed: {
    data() {
      return this.$store.state.goods
    },
  },
}
</script>

<style lang="less" scoped>
.m-cart {
  .scroll {
    height: calc(100vh - 133px);
    overflow: hidden;
    position: relative;
  }
}
</style>
