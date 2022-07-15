<template>
  <div id="music">
    <div class="nav">
      <router-link to="/music/home">首页</router-link>
      <router-link to="/music/singer">歌手</router-link>
      <router-link to="/music/rank">排行榜</router-link>
    </div>
    <router-view class="container" />
  </div>
</template>

<script>
export default {
  name:"music"
};
</script>

<style lang="less" scoped>
#music{
  margin: 0 auto;
  .nav{
    justify-content: space-between;
    line-height: 30px;
    display: flex;
    background-color: rgba(255, 255, 255, 0.726);
    a{
      color: black;
      text-decoration: none;
    }
  }
}
</style>