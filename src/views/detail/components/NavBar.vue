<template>
  <m-navbar>
    <span slot="left" class="iconfont icon-back" @click="$emit('on-back')"></span>
    <ul slot="default">
      <li
        v-for="item in data"
        :key="item.value"
        :class="{ active: item.value === value }"
        @click="liClick(item.value)"
      >
        {{ item.label }}
      </li>
    </ul>
  </m-navbar>
</template>

<script>
import Navbar from 'components/Navbar'

export default {
  name: 'Navbar',
  components: {
    MNavbar: Navbar,
  },
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
  },
  methods: {
    liClick(val) {
      this.value !== val && this.$emit('change', val)
    },
  },
}
</script>

<style lang="less" scoped>
.icon-back {
  color: #666;
  font-size: 20px;
}

ul {
  display: flex;

  li {
    flex: 1;
    font-size: 14px;
    color: #666;

    &.active {
      color: #ff8198;
    }
  }
}
</style>
