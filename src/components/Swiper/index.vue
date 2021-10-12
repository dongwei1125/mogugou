<template>
  <awesome-swiper :options="options">
    <slot />

    <div slot="pagination" class="swiper-pagination"></div>
  </awesome-swiper>
</template>

<script>
import { Swiper as AwesomeSwiper } from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',
  components: {
    AwesomeSwiper,
  },
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
