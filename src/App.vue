<template>
  <div id="app">
    <router-view/>
    <Tab/>
  </div>
</template>

<script>
  import Tab from './base/Tab'

  export default {
    name: 'App',
    components: {
      Tab
    }
  }
</script>

<style>
  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
  * {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none
  }

  input, button {
    -webkit-appearance: none
  }

  .content {
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 50px;
    overflow: auto;
  }
</style>
