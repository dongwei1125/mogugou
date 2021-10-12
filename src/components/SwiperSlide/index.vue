<template>
  <awesome-swiper-slide>
    <slot />
  </awesome-swiper-slide>
</template>

<script>
import { SwiperSlide as AwesomeSwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'SwiperSlide',
  components: {
    AwesomeSwiperSlide,
  },
}
</script>
