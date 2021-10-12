<template>
  <div class="m-home">
    <navbar background-color="#ff8198">购物街</navbar>

    <index-bar
      v-show="showSticky"
      v-model="currentBar"
      class="index-bar-cp"
      :data="indexBars"
      @change="onChange"
    />

    <better-scroll
      ref="scroll"
      class="scroll"
      :scroll="true"
      :pull-down="true"
      :pull-up="true"
      :probe-type="3"
      @pullingDown="pullingDown"
      @pullingUp="pullingUp"
      @onScroll="scroll"
      @onLoad="onLoad"
    >
      <swiper :options="swiperOptions">
        <swiper-slide v-for="item in banners" :key="item.id">
          <a :href="item.link">
            <img :src="item.url" alt="" />
          </a>
        </swiper-slide>
      </swiper>

      <recommend-view :data="recommends" />

      <feature-view :options="featureOps" />

      <index-bar ref="indexBar" v-model="currentBar" :data="indexBars" @change="onChange" />

      <card-list :data="cardLists" @item-click="itemClick" />
    </better-scroll>

    <span v-show="showTop" class="iconfont icon-top" @click="scrollToTop"></span>
  </div>
</template>

<script>
import Navbar from 'components/Navbar'
import BetterScroll from 'components/BetterScroll'
import Swiper from 'components/Swiper'
import SwiperSlide from 'components/SwiperSlide'
import IndexBar from 'components/IndexBar'

import RecommendView from './components/RecommendView'
import FeatureView from './components/FeatureView'
import CardList from './components/CardList'

import { getBann, getRecom, getFeat, getList } from '@/api/home'
import { debounce } from 'utils/index'

export default {
  name: 'Home',
  components: {
    Navbar,
    BetterScroll,
    Swiper,
    SwiperSlide,
    RecommendView,
    FeatureView,
    IndexBar,
    CardList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      featureOps: {},
      indexBars: [
        {
          label: '流行',
          value: '0',
        },
        {
          label: '新款',
          value: '1',
        },
        {
          label: '精选',
          value: '2',
        },
      ],
      currentBar: '0',
      pagination: {
        pageNum: 1,
        pageSize: 4,
      },
      cardLists: [],
      fresh: null,
      showSticky: false,
      showTop: false,
      swiperOptions: {
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 4000,
        },
      },
    }
  },
  created() {
    this.getBann()
    this.getRecom()
    this.getFeat()
    this.getList()
  },
  mounted() {
    this.$bus.$on('imageLoad', () => {
      this.refresh && this.refresh()
    })
  },
  beforeDestroy() {
    this.$bus.$off('imageLoad')
  },
  methods: {
    getBann() {
      getBann()
        .then(res => {
          this.banners = res.content
        })
        .catch(err => {
          console.log(err)
        })
    },

    getRecom() {
      getRecom()
        .then(res => {
          this.recommends = res.content
        })
        .catch(err => {
          console.log(err)
        })
    },

    getFeat() {
      getFeat()
        .then(res => {
          this.featureOps = res.content
        })
        .catch(err => {
          console.log(err)
        })
    },

    getList() {
      getList({
        type: this.currentBar,
        ...this.pagination,
      })
        .then(res => {
          this.cardLists = this.cardLists.concat(res.content)
          this.$refs.scroll.finishPullUp()
          this.$refs.scroll.finishPullDown()
        })
        .catch(err => {
          console.log(err)
        })
    },

    onChange() {
      this.pagination.pageNum = 1
      this.cardLists = []
      this.getList()
      this.$nextTick(() => {
        this.showSticky && this.$refs.scroll.scrollTo(0, -this.$refs.indexBar.$el.offsetTop, 0)
      })
    },

    scrollToTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },

    onLoad() {
      this.refresh = debounce(this.$refs.scroll.refresh, 20)
    },

    pullingDown() {
      this.pagination.pageNum = 1
      this.cardLists = []
      this.getList()
    },

    pullingUp() {
      this.pagination.pageNum++
      this.getList()
    },

    scroll({ y }) {
      this.$nextTick(() => {
        this.showSticky = this.$refs.indexBar && -y > this.$refs.indexBar.$el.offsetTop
      })

      this.showTop = -y > document.body.clientHeight
    },

    itemClick(id) {
      this.$router.push({ path: `/detail/${id}` })
    },
  },
}
</script>

<style lang="less" scoped>
.scroll {
  height: calc(100vh - 93px);
  overflow: hidden;
  position: relative;

  .swiper-slide a,
  .swiper-slide img {
    display: block;
    width: 100%;
  }
}

.icon-top {
  color: #ff8198;
  font-size: 50px;
  position: fixed;
  right: 10px;
  bottom: 54px;
  z-index: 9999;
}

.index-bar-cp {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 999;
}
</style>
