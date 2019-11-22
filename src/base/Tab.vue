<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-chazhaobiaodanliebiao"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-xingzhuanggongnengtubiao-"></i>
      <span>收藏</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjia"></i>
      <span>添加</span>
    </router-link>
  </div>
</template>

<style scoped lang="less">
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #e1ddee;
    display: flex;
    a{
      display: flex;
      color: #000;
      flex-display: column;
      flex: 1;
      align-items: center;
      justify-content: center;
    }
    a.router-link-active{
      color:red;
    }
  }
</style>
