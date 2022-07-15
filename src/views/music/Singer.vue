<template>
  <div>
      <h2 @click="changeText" ref="nextTick">{{msg}}</h2>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        msg:"旧的dom"
      }
    },
    methods:{
      changeText(){
        this.msg="新的dom"
        console.log(this.$refs.nextTick.textContent);//旧的dom
        this.$nextTick(()=>{
           console.log(this.$refs.nextTick.textContent);//新的dom
        })
      }
    }
  }
</script>

<style lang="less" scoped>
// @import url('../../assets/css/all.less');//引入全局less
// @import "../../assets/css/all.scss";
// h2{
//   color: var(--fontColor);//全局样式css
//   // font-size: @fontSize;
//   background-color: $bg;
// }
</style>