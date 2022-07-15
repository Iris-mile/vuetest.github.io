<template>
  <div>
    <!-- 自己手写实现了在自定义组件上的 v-model>>>利用：value和@input实现（父传子子传父） -->
    <count-number v-model="num" />
    <!-- <count-number :value="num" @input="num=$event"/> -->
    <span>{{ num }}</span>

    <!-- <count-number v-model="isCheck"/>
           <count-number :value="isCheck" @input="isCheck=$event"/>
          <span>{{isCheck}}</span> -->
    <input type="text" />缓存内容
  </div>
</template>

<script>
import CountNumber from "@/components/Count.vue";
export default {
  name: "user1", //结合keep-alive标签使用
  components: { CountNumber },
  data() {
    return {
      num: 10,
      // isCheck:false
    };
  },
  activated() {
    console.log("我进来啦");
  },
  deactivated() {
    console.log("缓存组件我出去啦");
  },
};
</script>

<style lang="less" scoped></style>
