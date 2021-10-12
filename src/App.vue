<template>
  <div id="app">
    <tabbar exclude="detail" />

    <keep-alive exclude="Cart,Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Tabbar from 'layout/Tabbar'

export default {
  name: 'App',
  components: {
    Tabbar,
  },
}
</script>
