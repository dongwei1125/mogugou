<template>
  <div class="m-detail">
    <navbar v-model="currentBar" :data="navbars" @on-back="onBack" @change="onChange" />

    <better-scroll
      ref="scroll"
      class="scroll"
      :class="{ pagi: swipers.length === 1 }"
      :scroll="true"
      :pull-down="false"
      :pull-up="false"
      :probe-type="3"
      @onLoad="onLoad"
      @onScroll="scroll"
    >
      <swiper ref="swiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in swipers" :key="index">
          <div><img :src="item" alt="" /></div>
        </swiper-slide>
      </swiper>

      <goods-info :data="goodsInfo" />

      <store-info :data="storeInfo" />

      <cloth-list ref="colth" :data="clothList" />

      <params-info ref="params" :data="paramsInfo" />

      <comment-list ref="comment" :data="commentList" />

      <recommend-list :data="recommendList" />
    </better-scroll>

    <submit-bar @on-add="onAdd" />

    <span v-show="showTop" class="iconfont icon-top" @click="scrollToTop"></span>
  </div>
</template>

<script>
import BetterScroll from 'components/BetterScroll'
import Swiper from 'components/Swiper'
import SwiperSlide from 'components/SwiperSlide'

import Navbar from './components/NavBar'
import GoodsInfo from './components/GoodsInfo'
import StoreInfo from './components/StoreInfo'
import ClothList from './components/ClothList'
import ParamsInfo from './components/ParamsInfo'
import CommentList from './components/CommentList'
import RecommendList from './components/RecommendList'
import SubmitBar from './components/SubmitBar'

import { getDetail } from '@/api/home'
import { debounce } from 'utils/index'

export default {
  name: 'Detail',
  components: {
    Navbar,
    BetterScroll,
    Swiper,
    SwiperSlide,
    GoodsInfo,
    StoreInfo,
    ClothList,
    ParamsInfo,
    CommentList,
    RecommendList,
    SubmitBar,
  },
  data() {
    return {
      navbars: [
        {
          label: '商品',
          value: '0',
          refName: 'swiper',
        },
        {
          label: '图片',
          value: '1',
          refName: 'colth',
        },
        {
          label: '参数',
          value: '2',
          refName: 'params',
        },
        {
          label: '评论',
          value: '3',
          refName: 'comment',
        },
      ],
      currentBar: '0',
      swipers: [],
      goodsInfo: {},
      storeInfo: {},
      clothList: {},
      paramsInfo: {},
      commentList: [],
      recommendList: [],
      showTop: false,
      fresh: null,
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 4000,
        },
      },
    }
  },
  created() {
    this.getDetail(this.$route.params.id)
  },
  mounted() {
    this.$bus.$on('detailLoad', () => {
      this.refresh && this.refresh()
    })
  },
  beforeDestroy() {
    this.$bus.$off('detailLoad')
  },
  methods: {
    getDetail(id) {
      getDetail(id)
        .then(res => {
          const {
            id,
            swiper,
            title,
            range,
            oldPrice,
            columns,
            services,
            image,
            price,
            shop,
            desc,
            detail,
            tables,
            info,
            rate,
            recommend,
          } = res.content

          this.swipers = swiper
          this.goodsInfo = {
            id,
            title,
            range,
            oldPrice,
            columns,
            services,
            image,
            price,
            desc,
          }
          this.storeInfo = shop
          this.clothList = {
            desc,
            detail,
          }
          this.paramsInfo = {
            tables,
            info,
          }
          this.commentList = rate
          this.recommendList = recommend
          this.swipers.length === 1 &&
            Object.assign(this.swiperOptions, {
              loop: false,
              pagination: undefined,
              autoplay: undefined,
            })
        })
        .catch(err => {
          console.log(err)
        })
    },

    onBack() {
      this.$router.go(-1)
    },

    onChange(val) {
      const el = this.navbars.find(el => el.value == val)
      const refName = el && el.refName

      this.$nextTick(() => {
        this.$refs.scroll &&
          this.$refs.scroll.scrollTo(0, (this.$refs[refName] && -this.$refs[refName].$el.offsetTop) || 0)
      })
    },

    onLoad() {
      this.refresh = debounce(this.$refs.scroll.refresh, 20)
    },

    scroll({ y }) {
      this.showTop = -y > document.body.clientHeight

      this.$nextTick(() => {
        this.navbars.forEach(el => {
          if (this.$refs[el.refName] && -y >= this.$refs[el.refName].$el.offsetTop) {
            this.currentBar = el.value
          }
        })
      })
    },

    scrollToTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },

    onAdd() {
      const { id, price, desc, image, title } = this.goodsInfo

      this.$store.commit('ADD_GOODS', { id, price, image, desc, title })
      this.$message('添加购物车成功!')
    },
  },
}
</script>

<style lang="less" scoped>
.m-detail {
  .scroll {
    height: calc(100vh - 93px);
    overflow: hidden;
    position: relative;
  }

  .swiper-slide {
    div {
      height: 250px;
    }

    img {
      width: 100%;
    }
  }

  /deep/ .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
  }

  /deep/ .swiper-pagination-bullet-active {
    background: rgba(212, 62, 46, 1);
  }

  /deep/ .pagi .swiper-pagination {
    display: none;
  }

  .icon-top {
    color: #ff8198;
    font-size: 50px;
    position: fixed;
    right: 10px;
    bottom: 54px;
    z-index: 9999;
  }
}
</style>
