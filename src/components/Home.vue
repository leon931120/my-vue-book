<template>
  <div>
    <MHeader :back="true">首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
    </div>
  </div>
</template>

<script>
  //1.引入组件 2.注册组件 3.使用组件
  import MHeader from '../base/MHeader'
  import Swiper from '../base/Swiper'
  import {getSliders} from "../api";

  export default {
    async created() {

      //给data起别名 对象中的属性名字必须和得到的结果名字一致
      let {data: sliders} = await getSliders();
      //讲获取的数据放到sliders中
      this.sliders = sliders;
    },
    name: "Home",
    components: {
      MHeader,
      Swiper
    },
    data(){
      return {sliders:[]}
    }
  }
</script>

<style scoped>
</style>
