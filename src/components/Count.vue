<template>
  <div>
    <h3>自己组价v-model绑定</h3>
    <button @click="changeNum(-1)">-</button>
    <input type="text" v-model="getNum" @input="changeVal" />
    <button @click="changeNum(1)">+</button>
    
    <!-- <input type="checkbox" :checked="value" @change="$emit('input', $event.target.checked)"/> -->
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    // value:{
    //     type:Boolean,
    //     default:false
    // }
  },
  data() {
    return {
      getNum: this.value, //解决子组件修改父组件值报错
    };
  },
  methods: {
    changeNum(val) {
      this.getNum += val;
      this.$emit("input", this.getNum); //传子组件内容过去
    },
    changeVal(e) {
      this.getNum = parseInt(e.target.value);
      this.$emit("input", this.getNum);
    },
  },
};
</script>

<style lang="less" scoped>
</style>
