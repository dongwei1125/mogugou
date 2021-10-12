<template>
  <div class="total-bar">
    <div class="check" @click="onChange">
      <check-button v-model="checked" />
      <span>全选</span>
    </div>

    <div class="price">
      <span>合计：</span>
      <span>{{ totals.price }}</span>
    </div>

    <div class="number">去结算({{ totals.count }})</div>
  </div>
</template>

<script>
import CheckButton from 'components/CheckButton'

export default {
  name: 'TotalBar',
  components: {
    CheckButton,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    totals() {
      const object = this.data.reduce(
        (pre, cur) => {
          if (cur.checked) {
            pre.price += Number(cur.price)
            pre.count += cur.count
          }

          return pre
        },
        { price: 0, count: 0 }
      )
      object.price = object.price.toFixed(2)

      return object
    },
    checked: {
      set(val) {
        this.data.forEach(el => {
          el.checked = val
        })
      },
      get() {
        return this.data.every(el => el.checked)
      },
    },
  },
  methods: {
    onChange() {
      this.checked = !this.checked
      this.$store.commit('ALL_CHECKED', this.checked)
    },
  },
}
</script>

<style lang="less" scoped>
.total-bar {
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 40px;
  line-height: 40px;
  display: flex;
  z-index: 9999;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.2);

  .check {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 18px;
    position: relative;

    span {
      padding-left: 2px;
      color: #666;
      font-size: 16px;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }

  .price {
    flex: 2;

    span {
      font-size: 16px;
      color: #666;
    }

    span + span {
      color: #ff8198;
    }
  }

  .number {
    flex: 1;
    background-color: #ff5777;
    font-size: 16px;
    color: #fff;
  }
}
</style>
