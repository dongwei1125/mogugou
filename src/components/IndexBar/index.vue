<template>
  <div class="index-bar">
    <div
      v-for="item in data"
      :key="item[props.value]"
      class="index-bar-item"
      :class="{ active: value === item[props.value] }"
      @click="itemClick(item)"
    >
      <span>{{ item[props.label] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexBar',
  model: {
    value: 'value',
    event: 'change',
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: '',
    },
    props: {
      type: Object,
      default: () => ({
        label: 'label',
        value: 'value',
      }),
    },
  },
  methods: {
    itemClick(item) {
      item[this.props.value] !== this.value && this.$emit('change', item[this.props.value])
    },
  },
}
</script>

<style lang="less" scoped>
.index-bar {
  display: flex;
  height: 40px;
  line-height: 34px;
  background-color: #fff;

  .index-bar-item {
    flex: 1;
    text-align: center;

    span {
      font-size: 15px;
      padding: 5px;
      border-bottom: 3px solid transparent;
    }

    &.active {
      color: #ff8198;

      span {
        border-color: #ff8198;
      }
    }
  }
}
</style>
