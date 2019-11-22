<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">I'm Slide {{ slide }}</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay: 3500,
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    }
  }
</script>
