<template>
  <div id="custom">
    <div class="nav">
      <router-link to="/custom/user1">用户1</router-link>
      <router-link to="/custom/user2">用户2</router-link>
      <router-link to="/custom/user3" >用户3</router-link>
      <!-- <a :class="styleActive==1?'active':''" @click="toActive('1')">用户1</a>
      <a :class="styleActive==2?'active':''" @click="toActive('2')">用户2</a>
      <a :class="styleActive==3?'active':''"  @click="toActive('3')">用户3</a> -->
    </div>

    <!-- 缓存组件User1 -->
    <keep-alive include="user1">
      <router-view class="container" />
    </keep-alive>
    
  </div>
</template>

<script>
export default {
    data(){
        return{
            styleActive:1
        }
    },
    methods:{
        toActive(val){
            console.log(val);
            this.styleActive=val
        }
    }
};
</script>

<style lang="less" scoped>
#custom{
  margin: 0 auto;
  .nav{
    justify-content: space-between;
    line-height: 30px;
    display: flex;
    background-color: rgba(255, 255, 255, 0.726);
    a{
      color: black;
      text-decoration: none;
      &.router-link-active{
        color: orange;
    }
    }
    
  }
  .active{
      color: orange !important;
  }
}
</style>