<template>
  <div id="app">
    <div class="nav">
      <router-link to="/music">音乐馆</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/custom">客户端</router-link>
      <router-link to="/echarts">echarts</router-link>
    </div>
    <router-view class="container" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#app {
  width: 800px;
  margin: 0 auto;
}
.nav {
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: green;
  a {
    text-decoration: none;
    color: white;
    flex: 1;
    display: block;
    text-align: center;
    &.router-link-active {
      color: rgb(0, 183, 255);
    }
  }
}
.container {
  height: 300px;
  // background-color: rgb(0, 204, 255);
}
</style>
