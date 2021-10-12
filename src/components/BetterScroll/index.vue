<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'BetterScroll',
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    click: {
      type: Boolean,
      default: true,
    },
    scroll: {
      type: Boolean,
      default: false,
    },
    pullUp: {
      type: [Boolean, Object],
      default: false,
    },
    pullDown: {
      type: [Boolean, Object],
      default: false,
    },
  },
  data() {
    return {
      bscroll: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init() {
      if (!this.$refs.wrapper) {
        return
      }

      this.bscroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        pullDownRefresh: this.pullDown,
        pullUpLoad: this.pullUp,
      })

      this.scroll && this.bscroll.on('scroll', pos => this.$emit('onScroll', pos))
      this.pullUp && this.bscroll.on('pullingUp', () => this.$emit('pullingUp'))
      this.pullDown && this.bscroll.on('pullingDown', () => this.$emit('pullingDown'))

      this.$emit('onLoad')
    },

    finishPullDown() {
      this.bscroll && this.bscroll.finishPullDown()
    },

    finishPullUp() {
      this.bscroll && this.bscroll.finishPullUp()
    },

    refresh() {
      this.bscroll && this.bscroll.refresh()
    },

    scrollTo(x, y = 0, delay = 300) {
      this.bscroll && this.bscroll.scrollTo(x, y, delay)
    },
  },
}
</script>
