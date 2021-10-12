<template>
  <div class="card-list">
    <card-list-item
      v-for="item in data"
      :key="item.id"
      :data="item"
      @click.native="$emit('item-click', item.id)"
    />
  </div>
</template>

<script>
import CardListItem from './CardListItem'

export default {
  name: 'CardList',
  components: {
    CardListItem,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="less" scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
