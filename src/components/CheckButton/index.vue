<template>
  <div class="check-button" :class="{ checked: value }" @click.stop="$emit('change', !value)">
    <span class="iconfont icon-check"></span>
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  model: {
    value: 'value',
    event: 'change',
  },
  props: {
    value: Boolean,
  },
}
</script>

<style lang="less" scoped>
.check-button {
  border-radius: 50%;
  border: 1px solid #aaa;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  background-color: #fff;

  span {
    color: #fff;
  }

  &.checked {
    background-color: #ff8194;
    border: 1px solid transparent;
  }
}
</style>
