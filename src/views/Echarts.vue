<template>
  <div id="echarts">
    <div class="nav">
      <router-link to="/echarts/chart1">图例1</router-link>
      <router-link to="/echarts/chart2">图例2</router-link>
      <router-link to="/echarts/chart3">图例3</router-link>
    </div>

    <router-view class="container" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleActive: 1,
    };
  },
  methods: {
    toActive(val) {
      console.log(val);
      this.styleActive = val;
    },
  },
};
</script>

<style lang="less" scoped>
#echarts {
  margin: 0 auto;
  .nav {
    justify-content: space-between;
    line-height: 30px;
    display: flex;
    background-color: rgba(255, 255, 255, 0.726);
    a {
      color: black;
      text-decoration: none;
      &.router-link-active {
        color: orange;
      }
    }
  }
}
</style>
