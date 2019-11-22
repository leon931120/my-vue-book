<template>
  <div>
    <MHeader :back="true">首页</MHeader>
    <div class="content">
      <Swiper></Swiper>
    </div>
  </div>
</template>

<script>
  //1.引入组件 2.注册组件 3.使用组件
  import MHeader from '../base/MHeader'
  import Swiper from '../base/Swiper'
    export default {
        name: "Home",
      components:{
          MHeader,
          Swiper
      }
    }
</script>

<style scoped>
</style>
